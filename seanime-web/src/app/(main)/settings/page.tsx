"use client"
import { ServerStatus, Settings } from "@/lib/server/types"
import { useAtom } from "jotai/react"
import { serverStatusAtom } from "@/atoms/server-status"
import React, { useEffect } from "react"
import { Field, TypesafeForm } from "@/components/ui/typesafe-form"
import { settingsSchema } from "@/lib/server/schemas"
import { FcFolder } from "@react-icons/all-files/fc/FcFolder"
import { Divider } from "@/components/ui/divider"
import { FcVideoCall } from "@react-icons/all-files/fc/FcVideoCall"
import { FcVlc } from "@react-icons/all-files/fc/FcVlc"
import { FcClapperboard } from "@react-icons/all-files/fc/FcClapperboard"
import { FcMindMap } from "@react-icons/all-files/fc/FcMindMap"
import { useSeaMutation } from "@/lib/server/queries/utils"
import { SeaEndpoints } from "@/lib/server/endpoints"
import toast from "react-hot-toast"

export default function Page() {
    const [status, setServerStatus] = useAtom(serverStatusAtom)

    const { mutate, data, isPending } = useSeaMutation<ServerStatus, Settings>({
        endpoint: SeaEndpoints.SETTINGS,
        mutationKey: ["patch-settings"],
        method: "patch",
        onSuccess: () => {
            toast.success("Settings updated")
        },
    })

    useEffect(() => {
        if (!isPending && !!data?.settings) {
            setServerStatus(data)
        }
    }, [data, isPending])

    return (
        <div className="p-12 space-y-4">
            <h2>Settings</h2>
            <Divider/>
            <TypesafeForm
                schema={settingsSchema}
                onSubmit={data => {
                    mutate({
                        library: {
                            libraryPath: data.libraryPath,
                        },
                        mediaPlayer: {
                            host: data.mediaPlayerHost,
                            defaultPlayer: data.defaultPlayer,
                            vlcPort: data.vlcPort,
                            vlcUsername: data.vlcUsername || "",
                            vlcPassword: data.vlcPassword,
                            vlcPath: data.vlcPath || "",
                            mpcPort: data.mpcPort,
                            mpcPath: data.mpcPath || "",
                        },
                        torrent: {
                            qbittorrentPath: data.qbittorrentPath,
                            qbittorrentHost: data.qbittorrentHost,
                            qbittorrentPort: data.qbittorrentPort,
                            qbittorrentPassword: data.qbittorrentPassword,
                            qbittorrentUsername: data.qbittorrentUsername,
                        },
                    })
                }}
                defaultValues={{
                    libraryPath: status?.settings?.library?.libraryPath,
                    mediaPlayerHost: status?.settings?.mediaPlayer?.host,
                    defaultPlayer: status?.settings?.mediaPlayer?.defaultPlayer,
                    vlcPort: status?.settings?.mediaPlayer?.vlcPort,
                    vlcUsername: status?.settings?.mediaPlayer?.vlcUsername,
                    vlcPassword: status?.settings?.mediaPlayer?.vlcPassword,
                    vlcPath: status?.settings?.mediaPlayer?.vlcPath,
                    mpcPort: status?.settings?.mediaPlayer?.mpcPort,
                    mpcPath: status?.settings?.mediaPlayer?.mpcPath,
                    qbittorrentPath: status?.settings?.torrent?.qbittorrentPath,
                    qbittorrentHost: status?.settings?.torrent?.qbittorrentHost,
                    qbittorrentPort: status?.settings?.torrent?.qbittorrentPort,
                    qbittorrentPassword: status?.settings?.torrent?.qbittorrentPassword,
                    qbittorrentUsername: status?.settings?.torrent?.qbittorrentUsername,
                }}
                stackClassName="space-y-4"
            >
                <Field.DirectorySelector
                    name="libraryPath"
                    label="Library folder"
                    leftIcon={<FcFolder/>}
                    shouldExist
                />
                <Divider/>
                <Field.Select
                    name="defaultPlayer"
                    label="Default player"
                    leftIcon={<FcVideoCall/>}
                    options={[
                        { label: "VLC", value: "vlc" },
                        { label: "MPC-HC (Windows only)", value: "mpc-hc" },
                    ]}
                    help="Player that will be used to open files and track your progress automatically."
                />
                {/*<Divider/>*/}
                <Field.Text
                    name="mediaPlayerHost"
                    label="Host (VLC/MPC-HC)"
                />
                <h3 className="flex gap-2 items-center"><FcVlc/> VLC</h3>
                <div className="flex gap-4">
                    <Field.Text
                        name="vlcUsername"
                        label="Username"
                    />
                    <Field.Text
                        name="vlcPassword"
                        label="Password"
                    />
                    <Field.Number
                        name="vlcPort"
                        label="Port"
                        discrete
                    />
                </div>
                <Field.Text
                    name="vlcPath"
                    label="Executable"
                />
                <h3 className="flex gap-2 items-center"><FcClapperboard/> MPC-HC</h3>
                <div className="flex gap-4">
                    <Field.Number
                        name="mpcPort"
                        label="Port"
                        discrete
                    />
                </div>
                <Field.Text
                    name="mpcPath"
                    label="Executable"
                />
                <h3 className="flex gap-2 items-center"><FcMindMap/> qBittorrent</h3>
                <Field.Text
                    name="qbittorrentHost"
                    label="Host"
                />
                <div className="flex gap-4">
                    <Field.Text
                        name="qbittorrentUsername"
                        label="Username"
                    />
                    <Field.Text
                        name="qbittorrentPassword"
                        label="Password"
                    />
                    <Field.Number
                        name="qbittorrentPort"
                        label="Port"
                        discrete
                    />
                </div>
                <Field.Text
                    name="qbittorrentPath"
                    label="Executable"
                />
                <Field.Submit role="save" isLoading={isPending}/>
            </TypesafeForm>
        </div>
    )

}