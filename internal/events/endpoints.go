// This code was generated by codegen/main.go. DO NOT EDIT.
package events

const (
	AddUnknownMediaEndpoint                            = "ANIME-COLLECTION-add-unknown-media"
	AnilistListAnimeEndpoint                           = "ANILIST-anilist-list-anime"
	AnilistListMangaEndpoint                           = "MANGA-anilist-list-manga"
	AnilistListMissedSequelsEndpoint                   = "ANILIST-anilist-list-missed-sequels"
	AnilistListRecentAiringAnimeEndpoint               = "ANILIST-anilist-list-recent-airing-anime"
	AnimeEntryBulkActionEndpoint                       = "ANIME-ENTRIES-anime-entry-bulk-action"
	AnimeEntryManualMatchEndpoint                      = "ANIME-ENTRIES-anime-entry-manual-match"
	CancelDiscordActivityEndpoint                      = "DISCORD-cancel-discord-activity"
	ClearAllChapterDownloadQueueEndpoint               = "MANGA-DOWNLOAD-clear-all-chapter-download-queue"
	ClearFileCacheMediastreamVideoFilesEndpoint        = "FILECACHE-clear-file-cache-mediastream-video-files"
	CreateAutoDownloaderRuleEndpoint                   = "AUTO-DOWNLOADER-create-auto-downloader-rule"
	CreatePlaylistEndpoint                             = "PLAYLIST-create-playlist"
	DebridAddTorrentsEndpoint                          = "DEBRID-debrid-add-torrents"
	DebridCancelDownloadEndpoint                       = "DEBRID-debrid-cancel-download"
	DebridCancelStreamEndpoint                         = "DEBRID-debrid-cancel-stream"
	DebridDeleteTorrentEndpoint                        = "DEBRID-debrid-delete-torrent"
	DebridDownloadTorrentEndpoint                      = "DEBRID-debrid-download-torrent"
	DebridGetTorrentFilePreviewsEndpoint               = "DEBRID-debrid-get-torrent-file-previews"
	DebridGetTorrentInfoEndpoint                       = "DEBRID-debrid-get-torrent-info"
	DebridGetTorrentsEndpoint                          = "DEBRID-debrid-get-torrents"
	DebridStartStreamEndpoint                          = "DEBRID-debrid-start-stream"
	DeleteAnilistListEntryEndpoint                     = "ANILIST-delete-anilist-list-entry"
	DeleteAutoDownloaderItemEndpoint                   = "AUTO-DOWNLOADER-delete-auto-downloader-item"
	DeleteAutoDownloaderRuleEndpoint                   = "AUTO-DOWNLOADER-delete-auto-downloader-rule"
	DeleteLocalFilesEndpoint                           = "LOCALFILES-delete-local-files"
	DeleteLogsEndpoint                                 = "STATUS-delete-logs"
	DeleteMangaDownloadedChaptersEndpoint              = "MANGA-DOWNLOAD-delete-manga-downloaded-chapters"
	DeletePlaylistEndpoint                             = "PLAYLIST-delete-playlist"
	DirectorySelectorEndpoint                          = "DIRECTORY-SELECTOR-directory-selector"
	DownloadIssueReportEndpoint                        = "REPORT-download-issue-report"
	DownloadMangaChaptersEndpoint                      = "MANGA-DOWNLOAD-download-manga-chapters"
	DownloadReleaseEndpoint                            = "DOWNLOAD-download-release"
	DownloadTorrentFileEndpoint                        = "DOWNLOAD-download-torrent-file"
	EditAnilistListEntryEndpoint                       = "ANILIST-edit-anilist-list-entry"
	EditMALListEntryProgressEndpoint                   = "MAL-edit-mal-list-entry-progress"
	EmptyMangaEntryCacheEndpoint                       = "MANGA-empty-manga-entry-cache"
	EmptyTVDBEpisodesEndpoint                          = "METADATA-empty-tvdb-episodes"
	FetchAnimeEntrySuggestionsEndpoint                 = "ANIME-ENTRIES-fetch-anime-entry-suggestions"
	FetchExternalExtensionDataEndpoint                 = "EXTENSIONS-fetch-external-extension-data"
	GetActiveTorrentListEndpoint                       = "TORRENT-CLIENT-get-active-torrent-list"
	GetAllExtensionsEndpoint                           = "EXTENSIONS-get-all-extensions"
	GetAniListStatsEndpoint                            = "ANILIST-get-ani-list-stats"
	GetAnilistAnimeDetailsEndpoint                     = "ANILIST-get-anilist-anime-details"
	GetAnilistMangaCollectionEndpoint                  = "MANGA-get-anilist-manga-collection"
	GetAnilistStudioDetailsEndpoint                    = "ANILIST-get-anilist-studio-details"
	GetAnimeCollectionEndpoint                         = "ANILIST-get-anime-collection"
	GetAnimeEntryEndpoint                              = "ANIME-ENTRIES-get-anime-entry"
	GetAnimeEntrySilenceStatusEndpoint                 = "ANIME-ENTRIES-get-anime-entry-silence-status"
	GetAutoDownloaderItemsEndpoint                     = "AUTO-DOWNLOADER-get-auto-downloader-items"
	GetAutoDownloaderRuleEndpoint                      = "AUTO-DOWNLOADER-get-auto-downloader-rule"
	GetAutoDownloaderRulesEndpoint                     = "AUTO-DOWNLOADER-get-auto-downloader-rules"
	GetAutoDownloaderRulesByAnimeEndpoint              = "AUTO-DOWNLOADER-get-auto-downloader-rules-by-anime"
	GetContinuityWatchHistoryEndpoint                  = "CONTINUITY-get-continuity-watch-history"
	GetContinuityWatchHistoryItemEndpoint              = "CONTINUITY-get-continuity-watch-history-item"
	GetDebridSettingsEndpoint                          = "DEBRID-get-debrid-settings"
	GetDocsEndpoint                                    = "DOCS-get-docs"
	GetExtensionUserConfigEndpoint                     = "EXTENSIONS-get-extension-user-config"
	GetFileCacheMediastreamVideoFilesTotalSizeEndpoint = "FILECACHE-get-file-cache-mediastream-video-files-total-size"
	GetFileCacheTotalSizeEndpoint                      = "FILECACHE-get-file-cache-total-size"
	GetLatestLogContentEndpoint                        = "STATUS-get-latest-log-content"
	GetLatestUpdateEndpoint                            = "RELEASES-get-latest-update"
	GetLibraryCollectionEndpoint                       = "ANIME-COLLECTION-get-library-collection"
	GetLocalFilesEndpoint                              = "LOCALFILES-get-local-files"
	GetLogFilenamesEndpoint                            = "STATUS-get-log-filenames"
	GetMangaChapterCountMapEndpoint                    = "MANGA-get-manga-chapter-count-map"
	GetMangaCollectionEndpoint                         = "MANGA-get-manga-collection"
	GetMangaDownloadDataEndpoint                       = "MANGA-DOWNLOAD-get-manga-download-data"
	GetMangaDownloadQueueEndpoint                      = "MANGA-DOWNLOAD-get-manga-download-queue"
	GetMangaDownloadsListEndpoint                      = "MANGA-DOWNLOAD-get-manga-downloads-list"
	GetMangaEntryEndpoint                              = "MANGA-get-manga-entry"
	GetMangaEntryChaptersEndpoint                      = "MANGA-get-manga-entry-chapters"
	GetMangaEntryDetailsEndpoint                       = "MANGA-get-manga-entry-details"
	GetMangaEntryDownloadedChaptersEndpoint            = "MANGA-get-manga-entry-downloaded-chapters"
	GetMangaEntryPagesEndpoint                         = "MANGA-get-manga-entry-pages"
	GetMangaMappingEndpoint                            = "MANGA-get-manga-mapping"
	GetMediastreamSettingsEndpoint                     = "MEDIASTREAM-get-mediastream-settings"
	GetMissingEpisodesEndpoint                         = "ANIME-ENTRIES-get-missing-episodes"
	GetOnlineStreamEpisodeListEndpoint                 = "ONLINESTREAM-get-online-stream-episode-list"
	GetOnlineStreamEpisodeSourceEndpoint               = "ONLINESTREAM-get-online-stream-episode-source"
	GetOnlinestreamMappingEndpoint                     = "ONLINESTREAM-get-onlinestream-mapping"
	GetPlaylistEpisodesEndpoint                        = "PLAYLIST-get-playlist-episodes"
	GetPlaylistsEndpoint                               = "PLAYLIST-get-playlists"
	GetRawAnilistMangaCollectionEndpoint               = "MANGA-get-raw-anilist-manga-collection"
	GetRawAnimeCollectionEndpoint                      = "ANILIST-get-raw-anime-collection"
	GetScanSummariesEndpoint                           = "SCAN-SUMMARY-get-scan-summaries"
	GetSettingsEndpoint                                = "SETTINGS-get-settings"
	GetStatusEndpoint                                  = "STATUS-get-status"
	GetThemeEndpoint                                   = "THEME-get-theme"
	GetTorrentstreamBatchHistoryEndpoint               = "TORRENTSTREAM-get-torrentstream-batch-history"
	GetTorrentstreamEpisodeCollectionEndpoint          = "TORRENTSTREAM-get-torrentstream-episode-collection"
	GetTorrentstreamSettingsEndpoint                   = "TORRENTSTREAM-get-torrentstream-settings"
	GetTorrentstreamTorrentFilePreviewsEndpoint        = "TORRENTSTREAM-get-torrentstream-torrent-file-previews"
	GettingStartedEndpoint                             = "SETTINGS-getting-started"
	ImportLocalFilesEndpoint                           = "LOCALFILES-import-local-files"
	InstallExternalExtensionEndpoint                   = "EXTENSIONS-install-external-extension"
	InstallLatestUpdateEndpoint                        = "RELEASES-install-latest-update"
	ListAnimeTorrentProviderExtensionsEndpoint         = "EXTENSIONS-list-anime-torrent-provider-extensions"
	ListDevelopmentModeExtensionsEndpoint              = "EXTENSIONS-list-development-mode-extensions"
	ListExtensionDataEndpoint                          = "EXTENSIONS-list-extension-data"
	ListMangaProviderExtensionsEndpoint                = "EXTENSIONS-list-manga-provider-extensions"
	ListOnlinestreamProviderExtensionsEndpoint         = "EXTENSIONS-list-onlinestream-provider-extensions"
	LocalFileBulkActionEndpoint                        = "LOCALFILES-local-file-bulk-action"
	LoginEndpoint                                      = "AUTH-login"
	LogoutEndpoint                                     = "AUTH-logout"
	MALAuthEndpoint                                    = "MAL-mal-auth"
	MALLogoutEndpoint                                  = "MAL-mal-logout"
	MangaManualMappingEndpoint                         = "MANGA-manga-manual-mapping"
	MangaManualSearchEndpoint                          = "MANGA-manga-manual-search"
	MediastreamShutdownTranscodeStreamEndpoint         = "MEDIASTREAM-mediastream-shutdown-transcode-stream"
	OnlineStreamEmptyCacheEndpoint                     = "ONLINESTREAM-online-stream-empty-cache"
	OnlinestreamManualMappingEndpoint                  = "ONLINESTREAM-onlinestream-manual-mapping"
	OnlinestreamManualSearchEndpoint                   = "ONLINESTREAM-onlinestream-manual-search"
	OpenAnimeEntryInExplorerEndpoint                   = "ANIME-ENTRIES-open-anime-entry-in-explorer"
	OpenInExplorerEndpoint                             = "EXPLORER-open-in-explorer"
	PlaybackAutoPlayNextEpisodeEndpoint                = "PLAYBACK-MANAGER-playback-auto-play-next-episode"
	PlaybackCancelCurrentPlaylistEndpoint              = "PLAYBACK-MANAGER-playback-cancel-current-playlist"
	PlaybackCancelManualTrackingEndpoint               = "PLAYBACK-MANAGER-playback-cancel-manual-tracking"
	PlaybackGetNextEpisodeEndpoint                     = "PLAYBACK-MANAGER-playback-get-next-episode"
	PlaybackPlayNextEpisodeEndpoint                    = "PLAYBACK-MANAGER-playback-play-next-episode"
	PlaybackPlayRandomVideoEndpoint                    = "PLAYBACK-MANAGER-playback-play-random-video"
	PlaybackPlayVideoEndpoint                          = "PLAYBACK-MANAGER-playback-play-video"
	PlaybackPlaylistNextEndpoint                       = "PLAYBACK-MANAGER-playback-playlist-next"
	PlaybackStartManualTrackingEndpoint                = "PLAYBACK-MANAGER-playback-start-manual-tracking"
	PlaybackStartPlaylistEndpoint                      = "PLAYBACK-MANAGER-playback-start-playlist"
	PlaybackSyncCurrentProgressEndpoint                = "PLAYBACK-MANAGER-playback-sync-current-progress"
	PopulateFillerDataEndpoint                         = "METADATA-populate-filler-data"
	PopulateTVDBEpisodesEndpoint                       = "METADATA-populate-tvdb-episodes"
	PreloadMediastreamMediaContainerEndpoint           = "MEDIASTREAM-preload-mediastream-media-container"
	ReloadExternalExtensionEndpoint                    = "EXTENSIONS-reload-external-extension"
	ReloadExternalExtensionsEndpoint                   = "EXTENSIONS-reload-external-extensions"
	RemoveEmptyDirectoriesEndpoint                     = "LOCALFILES-remove-empty-directories"
	RemoveFileCacheBucketEndpoint                      = "FILECACHE-remove-file-cache-bucket"
	RemoveFillerDataEndpoint                           = "METADATA-remove-filler-data"
	RemoveMangaMappingEndpoint                         = "MANGA-remove-manga-mapping"
	RemoveOnlinestreamMappingEndpoint                  = "ONLINESTREAM-remove-onlinestream-mapping"
	RequestMediastreamMediaContainerEndpoint           = "MEDIASTREAM-request-mediastream-media-container"
	ResetErroredChapterDownloadQueueEndpoint           = "MANGA-DOWNLOAD-reset-errored-chapter-download-queue"
	RunAutoDownloaderEndpoint                          = "AUTO-DOWNLOADER-run-auto-downloader"
	RunExtensionPlaygroundCodeEndpoint                 = "EXTENSIONS-run-extension-playground-code"
	SaveAutoDownloaderSettingsEndpoint                 = "SETTINGS-save-auto-downloader-settings"
	SaveDebridSettingsEndpoint                         = "DEBRID-save-debrid-settings"
	SaveExtensionUserConfigEndpoint                    = "EXTENSIONS-save-extension-user-config"
	SaveIssueReportEndpoint                            = "REPORT-save-issue-report"
	SaveMediastreamSettingsEndpoint                    = "MEDIASTREAM-save-mediastream-settings"
	SaveSettingsEndpoint                               = "SETTINGS-save-settings"
	SaveTorrentstreamSettingsEndpoint                  = "TORRENTSTREAM-save-torrentstream-settings"
	ScanLocalFilesEndpoint                             = "SCAN-scan-local-files"
	SearchTorrentEndpoint                              = "TORRENT-SEARCH-search-torrent"
	SetDiscordAnimeActivityEndpoint                    = "DISCORD-set-discord-anime-activity"
	SetDiscordMangaActivityEndpoint                    = "DISCORD-set-discord-manga-activity"
	StartDefaultMediaPlayerEndpoint                    = "MEDIAPLAYER-start-default-media-player"
	StartMangaDownloadQueueEndpoint                    = "MANGA-DOWNLOAD-start-manga-download-queue"
	StopMangaDownloadQueueEndpoint                     = "MANGA-DOWNLOAD-stop-manga-download-queue"
	SyncAddMediaEndpoint                               = "SYNC-sync-add-media"
	SyncAnilistDataEndpoint                            = "SYNC-sync-anilist-data"
	SyncGetHasLocalChangesEndpoint                     = "SYNC-sync-get-has-local-changes"
	SyncGetIsMediaTrackedEndpoint                      = "SYNC-sync-get-is-media-tracked"
	SyncGetLocalStorageSizeEndpoint                    = "SYNC-sync-get-local-storage-size"
	SyncGetQueueStateEndpoint                          = "SYNC-sync-get-queue-state"
	SyncGetTrackedMediaItemsEndpoint                   = "SYNC-sync-get-tracked-media-items"
	SyncLocalDataEndpoint                              = "SYNC-sync-local-data"
	SyncRemoveMediaEndpoint                            = "SYNC-sync-remove-media"
	SyncSetHasLocalChangesEndpoint                     = "SYNC-sync-set-has-local-changes"
	TestDumpEndpoint                                   = "MANUAL-DUMP-test-dump"
	ToggleAnimeEntrySilenceStatusEndpoint              = "ANIME-ENTRIES-toggle-anime-entry-silence-status"
	TorrentClientActionEndpoint                        = "TORRENT-CLIENT-torrent-client-action"
	TorrentClientAddMagnetFromRuleEndpoint             = "TORRENT-CLIENT-torrent-client-add-magnet-from-rule"
	TorrentClientDownloadEndpoint                      = "TORRENT-CLIENT-torrent-client-download"
	TorrentstreamDropTorrentEndpoint                   = "TORRENTSTREAM-torrentstream-drop-torrent"
	TorrentstreamStartStreamEndpoint                   = "TORRENTSTREAM-torrentstream-start-stream"
	TorrentstreamStopStreamEndpoint                    = "TORRENTSTREAM-torrentstream-stop-stream"
	UninstallExternalExtensionEndpoint                 = "EXTENSIONS-uninstall-external-extension"
	UpdateAnimeEntryProgressEndpoint                   = "ANIME-ENTRIES-update-anime-entry-progress"
	UpdateAnimeEntryRepeatEndpoint                     = "ANIME-ENTRIES-update-anime-entry-repeat"
	UpdateAutoDownloaderRuleEndpoint                   = "AUTO-DOWNLOADER-update-auto-downloader-rule"
	UpdateContinuityWatchHistoryItemEndpoint           = "CONTINUITY-update-continuity-watch-history-item"
	UpdateExtensionCodeEndpoint                        = "EXTENSIONS-update-extension-code"
	UpdateLocalFileDataEndpoint                        = "LOCALFILES-update-local-file-data"
	UpdateLocalFilesEndpoint                           = "LOCALFILES-update-local-files"
	UpdateMangaProgressEndpoint                        = "MANGA-update-manga-progress"
	UpdatePlaylistEndpoint                             = "PLAYLIST-update-playlist"
	UpdateThemeEndpoint                                = "THEME-update-theme"
)
