export const enum WSEvents {
    ANILIST_DATA_LOADED = "anilist-data-loaded",
    SCAN_PROGRESS = "scan-progress",
    SCAN_STATUS = "scan-status",
    REFRESHED_ANILIST_ANIME_COLLECTION = "refreshed-anilist-anime-collection",
    REFRESHED_ANILIST_MANGA_COLLECTION = "refreshed-anilist-manga-collection",
    LIBRARY_WATCHER_FILE_ADDED = "library-watcher-file-added",
    LIBRARY_WATCHER_FILE_REMOVED = "library-watcher-file-removed",
    AUTO_DOWNLOADER_ITEM_ADDED = "auto-downloader-item-added",
    AUTO_SCAN_STARTED = "auto-scan-started",
    AUTO_SCAN_COMPLETED = "auto-scan-completed",
    PLAYBACK_MANAGER_PROGRESS_TRACKING_STARTED = "playback-manager-progress-tracking-started",
    PLAYBACK_MANAGER_PROGRESS_TRACKING_STOPPED = "playback-manager-progress-tracking-stopped",
    PLAYBACK_MANAGER_PROGRESS_VIDEO_COMPLETED = "playback-manager-progress-video-completed",
    PLAYBACK_MANAGER_PROGRESS_PLAYBACK_STATE = "playback-manager-progress-playback-state",
    PLAYBACK_MANAGER_PROGRESS_UPDATED = "playback-manager-progress-updated",
    PLAYBACK_MANAGER_PLAYLIST_STATE = "playback-manager-playlist-state",
    PLAYBACK_MANAGER_MANUAL_TRACKING_PLAYBACK_STATE = "playback-manager-manual-tracking-playback-state",
    EXTERNAL_PLAYER_OPEN_URL = "external-player-open-url",
    PLAYBACK_MANAGER_MANUAL_TRACKING_STOPPED = "playback-manager-manual-tracking-stopped",
    ERROR_TOAST = "error-toast",
    SUCCESS_TOAST = "success-toast",
    INFO_TOAST = "info-toast",
    WARNING_TOAST = "warning-toast",
    REFRESHED_MANGA_DOWNLOAD_DATA = "refreshed-manga-download-data",
    CHAPTER_DOWNLOAD_QUEUE_UPDATED = "chapter-download-queue-updated",
    OFFLINE_SNAPSHOT_CREATED = "offline-snapshot-created",
    MEDIASTREAM_SHUTDOWN_STREAM = "mediastream-shutdown-stream",
    EXTENSIONS_RELOADED = "extensions-reloaded",
    PLUGIN_UNLOADED = "plugin-unloaded",
    ACTIVE_TORRENT_COUNT_UPDATED = "active-torrent-count-updated",
    SYNC_LOCAL_QUEUE_STATE = "sync-local-queue-state",
    SYNC_LOCAL_FINISHED = "sync-local-finished",
    SYNC_ANILIST_FINISHED = "sync-anilist-finished",
    DEBRID_DOWNLOAD_PROGRESS = "debrid-download-progress",
    DEBRID_STREAM_STATE = "debrid-stream-state",
    CHECK_FOR_UPDATES = "check-for-updates",
    INVALIDATE_QUERIES = "invalidate-queries",
}

export const enum WebviewEvents {
    ANIME_ENTRY_PAGE_VIEWED = "anime-entry-page-viewed",
}
