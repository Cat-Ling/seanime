<p align="center">
<img src="../docs/images/logo_2.png" alt="preview" width="150px"/>
</p>

<h2 align="center"><b>Seanime Server</b></h2>

- `api`: Third-party APIs
  - `anilist`: AniList structs and methods
  - `anizip`: Metadata API
  - `filler`: Filler API
  - `listsync`
  - `mal`: MyAnimeList API
  - `mappings`: Mapping API
  - `metadata`: **Metadata module** for anime
  - `tvdb`: TheTVDB API
- `constants`: Version, keys
- `core`
  - `app.go`: **Shared app struct**
  - `config.go`: Configuration
  - `extensions.go`: Load built-in extensions
  - `fiber.go`: HTTP server
  - `watcher.go`: Library watcher
- `cron`: Background tasks
- `database`
  - `db`: **Database module**
  - `db_bridge`: Helper methods to avoid circular dependencies
  - `models`: Database models
- `debrid`: **Debrid module**
  - `debrid`: Structs and interfaces
  - `client`: **Debrid repository** for streaming, download
  - `torbox`
  - `realdebrid`
- `discordrpc`: Discord RPC
  - `client`
  - `ipc`
  - `presence`: **Discord Rich Presence module**
- `events`: **Websocket Event Manager module** and constants
- `extensions`: Structs and interfaces
- `extension_playground`: **Extension Playground module**
- `extension_repo`: **Extension Repository module**
- `handlers`: API handlers
- `library`
  - `anime`: Library structs and methods
  - `autodownloader` **Auto downloader module**
  - `autoscanner`: **Auto scanner module**
  - `filesystem`: File system methods
  - `playbackmanager`: **Playback Manager module** for progress tracking
  - `scanner`: **Scanner module**
  - `summary`: Scan summary
- `manga`: Manga structs and **Manga Downloader module**
  - `downloader`: Chapter downloader structs and methods
  - `providers`: Online provider structs and methods
- `mediaplayers`
  - `mediaplayer`: **Media Player Repository** module
  - `mpchc`
  - `mpv`
  - `mpvipc`
  - `vlc` 
- `mediastream`: **Media Stream Repository** module
  - `transcoder`: Transcoder
  - `videofile`: Media metadata
- `notifier`
- `onlinestream`: **Onlinestream module**
  - `providers`: Stream providers
  - `sources`: Video server sources
- `platforms`
  - `platform`: Platform structs and methods
  - `anilist_platform`
  - `local_platform`
- `test_utils`: Test methods
- `torrentstream`: **Torrent Stream Repository** module
- `sync`: **Sync/Offline module**
- `test_utils`: Test methods
- `torrent_clients`
  - `torrent_client`: **Torrent Client Repository** module
  - `qbittorrent`
  - `transmission`
- `torrents`
  - `analyzer`: Scan and identify torrent files
  - `animetosho`
  - `nyaa`
  - `seadex`
  - `torrent`: Torrent structs and methods
