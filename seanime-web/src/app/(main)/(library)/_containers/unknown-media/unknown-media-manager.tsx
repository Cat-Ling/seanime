import { useAddUnknownMedia } from "@/app/(main)/(library)/_containers/unknown-media/_lib/add-unknown-media"
import { AppLayoutStack } from "@/components/ui/app-layout"
import { Button } from "@/components/ui/button"
import { Drawer } from "@/components/ui/drawer"
import { UnknownGroup } from "@/lib/server/types"
import { atom } from "jotai"
import { useAtom } from "jotai/react"
import Link from "next/link"
import React, { useCallback } from "react"
import { BiLinkExternal } from "react-icons/bi"

export const _unknownMediaManagerIsOpen = atom(false)

type UnknownMediaManagerProps = {
    unknownGroups: UnknownGroup[]
}

export function UnknownMediaManager(props: UnknownMediaManagerProps) {

    const { unknownGroups } = props

    const [isOpen, setIsOpen] = useAtom(_unknownMediaManagerIsOpen)

    const { addUnknownMedia, isPending } = useAddUnknownMedia()

    const handleAddUnknownMedia = useCallback(() => {
        addUnknownMedia({ mediaIds: unknownGroups.map(n => n.mediaId) })
    }, [unknownGroups])

    React.useEffect(() => {
        if (unknownGroups.length === 0) {
            setIsOpen(false)
        }
    }, [unknownGroups])

    if (unknownGroups.length === 0) return null

    return (
        <Drawer
            open={isOpen}
            onOpenChange={o => {
                if (!isPending) {
                    setIsOpen(o)
                }
            }}
            size="xl"
            title="Resolve hidden media"

        >
            <AppLayoutStack className="mt-4">

                <p className="text-[--muted]">
                    Seanime found {unknownGroups.length} media in your local library that are absent from your AniList collection.<br />
                    Add them to be able to see them in your library.
                </p>

                <Button onClick={handleAddUnknownMedia} loading={isPending}>Add all</Button>

                <div className="divide divide-y divide-[--border] space-y-4">

                    {unknownGroups.map(group => {

                        return (
                            <div className="pt-4">
                                <h4 className="font-semibold mb-2 flex gap-2 items-center">
                                    Anilist ID:{" "}
                                    <Link
                                        href={`https://anilist.co/anime/${group.mediaId}`}
                                        target="_blank"
                                        className="underline text-brand-200 flex gap-1.5 items-center"
                                    >
                                        {group.mediaId} <BiLinkExternal />
                                    </Link>
                                </h4>
                                <div className="bg-gray-900 border p-2 px-2 rounded-md space-y-1 max-h-28 overflow-y-auto text-sm">
                                    {group.localFiles.sort((a, b) => ((Number(a.parsedInfo?.episode ?? 0)) - (Number(b.parsedInfo?.episode ?? 0))))
                                        .map(lf => {
                                            return <p key={lf.path} className="text-[--muted] line-clamp-1">
                                                {lf.path}
                                            </p>
                                        })}
                                </div>
                            </div>
                        )

                    })}
                </div>

            </AppLayoutStack>
        </Drawer>
    )

}
