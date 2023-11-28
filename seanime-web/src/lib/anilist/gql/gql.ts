/* eslint-disable */
import * as types from "./graphql"
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation UpdateEntry($mediaId: Int, $status: MediaListStatus, $score: Float, $progress: Int, $repeat: Int, $private: Boolean, $notes: String, $hiddenFromStatusLists: Boolean, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput) {\n  SaveMediaListEntry(\n    mediaId: $mediaId\n    status: $status\n    score: $score\n    progress: $progress\n    repeat: $repeat\n    private: $private\n    notes: $notes\n    hiddenFromStatusLists: $hiddenFromStatusLists\n    startedAt: $startedAt\n    completedAt: $completedAt\n  ) {\n    id\n  }\n}\n\nmutation UpdateMediaListEntryProgress($mediaId: Int, $progress: Int) {\n  SaveMediaListEntry(mediaId: $mediaId, progress: $progress) {\n    id\n  }\n}\n\nmutation DeleteEntry($mediaListEntryId: Int) {\n  DeleteMediaListEntry(id: $mediaListEntryId) {\n    deleted\n  }\n}": types.UpdateEntryDocument,
    "query AnimeCollection($userName: String) {\n  MediaListCollection(userName: $userName, type: ANIME) {\n    lists {\n      status\n      entries {\n        id\n        score\n        progress\n        status\n        notes\n        repeat\n        private\n        startedAt {\n          year\n          month\n          day\n        }\n        completedAt {\n          year\n          month\n          day\n        }\n        media {\n          ...baseMedia\n        }\n      }\n    }\n  }\n}\n\nquery SearchAnimeShortMedia($page: Int, $perPage: Int, $sort: [MediaSort], $search: String, $status: [MediaStatus]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n    }\n    media(\n      type: ANIME\n      search: $search\n      sort: $sort\n      status_in: $status\n      isAdult: false\n      format_not: MUSIC\n    ) {\n      ...basicMedia\n    }\n  }\n}\n\nquery BasicMediaByMalId($id: Int) {\n  Media(idMal: $id, type: ANIME) {\n    ...basicMedia\n  }\n}\n\nquery BasicMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...basicMedia\n  }\n}\n\nquery BaseMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...baseMedia\n  }\n}\n\nquery MediaDetailsById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    siteUrl\n    id\n    duration\n    genres\n    averageScore\n    popularity\n    meanScore\n    description\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    studios(isMain: true) {\n      nodes {\n        name\n      }\n    }\n    rankings {\n      context\n      type\n      rank\n      year\n      format\n      allTime\n      season\n    }\n    recommendations(page: 1, perPage: 8, sort: RATING_DESC) {\n      edges {\n        node {\n          mediaRecommendation {\n            id\n            coverImage {\n              extraLarge\n              large\n              medium\n              color\n            }\n            bannerImage\n            title {\n              romaji\n              english\n              native\n              userPreferred\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery CompleteMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...completeMedia\n  }\n}\n\nquery ListMedia($page: Int, $search: String, $perPage: Int, $sort: [MediaSort], $status: [MediaStatus], $genres: [String], $averageScore_greater: Int, $season: MediaSeason, $seasonYear: Int, $format: MediaFormat) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n      total\n      perPage\n      currentPage\n      lastPage\n    }\n    media(\n      type: ANIME\n      search: $search\n      sort: $sort\n      status_in: $status\n      isAdult: false\n      format: $format\n      genre_in: $genres\n      averageScore_greater: $averageScore_greater\n      season: $season\n      seasonYear: $seasonYear\n      format_not: MUSIC\n    ) {\n      ...basicMedia\n    }\n  }\n}\n\nquery ListRecentMedia($page: Int, $perPage: Int, $airingAt_greater: Int, $airingAt_lesser: Int) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n      total\n      perPage\n      currentPage\n      lastPage\n    }\n    airingSchedules(\n      notYetAired: false\n      sort: TIME_DESC\n      airingAt_greater: $airingAt_greater\n      airingAt_lesser: $airingAt_lesser\n    ) {\n      id\n      airingAt\n      episode\n      timeUntilAiring\n      media {\n        ...basicMedia\n      }\n    }\n  }\n}\n\nfragment basicMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n}\n\nfragment baseMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n  relations {\n    edges {\n      relationType(version: 2)\n      node {\n        ...basicMedia\n      }\n    }\n  }\n}\n\nfragment completeMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  duration\n  genres\n  averageScore\n  popularity\n  meanScore\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n  relations {\n    edges {\n      relationType(version: 2)\n      node {\n        ...basicMedia\n      }\n    }\n  }\n}": types.AnimeCollectionDocument,
    "query GetViewer {\n  Viewer {\n    name\n    avatar {\n      large\n      medium\n    }\n    bannerImage\n    isBlocked\n    options {\n      displayAdultContent\n      airingNotifications\n      profileColor\n    }\n  }\n}": types.GetViewerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateEntry($mediaId: Int, $status: MediaListStatus, $score: Float, $progress: Int, $repeat: Int, $private: Boolean, $notes: String, $hiddenFromStatusLists: Boolean, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput) {\n  SaveMediaListEntry(\n    mediaId: $mediaId\n    status: $status\n    score: $score\n    progress: $progress\n    repeat: $repeat\n    private: $private\n    notes: $notes\n    hiddenFromStatusLists: $hiddenFromStatusLists\n    startedAt: $startedAt\n    completedAt: $completedAt\n  ) {\n    id\n  }\n}\n\nmutation UpdateMediaListEntryProgress($mediaId: Int, $progress: Int) {\n  SaveMediaListEntry(mediaId: $mediaId, progress: $progress) {\n    id\n  }\n}\n\nmutation DeleteEntry($mediaListEntryId: Int) {\n  DeleteMediaListEntry(id: $mediaListEntryId) {\n    deleted\n  }\n}"): (typeof documents)["mutation UpdateEntry($mediaId: Int, $status: MediaListStatus, $score: Float, $progress: Int, $repeat: Int, $private: Boolean, $notes: String, $hiddenFromStatusLists: Boolean, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput) {\n  SaveMediaListEntry(\n    mediaId: $mediaId\n    status: $status\n    score: $score\n    progress: $progress\n    repeat: $repeat\n    private: $private\n    notes: $notes\n    hiddenFromStatusLists: $hiddenFromStatusLists\n    startedAt: $startedAt\n    completedAt: $completedAt\n  ) {\n    id\n  }\n}\n\nmutation UpdateMediaListEntryProgress($mediaId: Int, $progress: Int) {\n  SaveMediaListEntry(mediaId: $mediaId, progress: $progress) {\n    id\n  }\n}\n\nmutation DeleteEntry($mediaListEntryId: Int) {\n  DeleteMediaListEntry(id: $mediaListEntryId) {\n    deleted\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AnimeCollection($userName: String) {\n  MediaListCollection(userName: $userName, type: ANIME) {\n    lists {\n      status\n      entries {\n        id\n        score\n        progress\n        status\n        notes\n        repeat\n        private\n        startedAt {\n          year\n          month\n          day\n        }\n        completedAt {\n          year\n          month\n          day\n        }\n        media {\n          ...baseMedia\n        }\n      }\n    }\n  }\n}\n\nquery SearchAnimeShortMedia($page: Int, $perPage: Int, $sort: [MediaSort], $search: String, $status: [MediaStatus]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n    }\n    media(\n      type: ANIME\n      search: $search\n      sort: $sort\n      status_in: $status\n      isAdult: false\n      format_not: MUSIC\n    ) {\n      ...basicMedia\n    }\n  }\n}\n\nquery BasicMediaByMalId($id: Int) {\n  Media(idMal: $id, type: ANIME) {\n    ...basicMedia\n  }\n}\n\nquery BasicMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...basicMedia\n  }\n}\n\nquery BaseMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...baseMedia\n  }\n}\n\nquery MediaDetailsById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    siteUrl\n    id\n    duration\n    genres\n    averageScore\n    popularity\n    meanScore\n    description\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    studios(isMain: true) {\n      nodes {\n        name\n      }\n    }\n    rankings {\n      context\n      type\n      rank\n      year\n      format\n      allTime\n      season\n    }\n    recommendations(page: 1, perPage: 8, sort: RATING_DESC) {\n      edges {\n        node {\n          mediaRecommendation {\n            id\n            coverImage {\n              extraLarge\n              large\n              medium\n              color\n            }\n            bannerImage\n            title {\n              romaji\n              english\n              native\n              userPreferred\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery CompleteMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...completeMedia\n  }\n}\n\nquery ListMedia($page: Int, $search: String, $perPage: Int, $sort: [MediaSort], $status: [MediaStatus], $genres: [String], $averageScore_greater: Int, $season: MediaSeason, $seasonYear: Int, $format: MediaFormat) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n      total\n      perPage\n      currentPage\n      lastPage\n    }\n    media(\n      type: ANIME\n      search: $search\n      sort: $sort\n      status_in: $status\n      isAdult: false\n      format: $format\n      genre_in: $genres\n      averageScore_greater: $averageScore_greater\n      season: $season\n      seasonYear: $seasonYear\n      format_not: MUSIC\n    ) {\n      ...basicMedia\n    }\n  }\n}\n\nquery ListRecentMedia($page: Int, $perPage: Int, $airingAt_greater: Int, $airingAt_lesser: Int) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n      total\n      perPage\n      currentPage\n      lastPage\n    }\n    airingSchedules(\n      notYetAired: false\n      sort: TIME_DESC\n      airingAt_greater: $airingAt_greater\n      airingAt_lesser: $airingAt_lesser\n    ) {\n      id\n      airingAt\n      episode\n      timeUntilAiring\n      media {\n        ...basicMedia\n      }\n    }\n  }\n}\n\nfragment basicMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n}\n\nfragment baseMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n  relations {\n    edges {\n      relationType(version: 2)\n      node {\n        ...basicMedia\n      }\n    }\n  }\n}\n\nfragment completeMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  duration\n  genres\n  averageScore\n  popularity\n  meanScore\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n  relations {\n    edges {\n      relationType(version: 2)\n      node {\n        ...basicMedia\n      }\n    }\n  }\n}"): (typeof documents)["query AnimeCollection($userName: String) {\n  MediaListCollection(userName: $userName, type: ANIME) {\n    lists {\n      status\n      entries {\n        id\n        score\n        progress\n        status\n        notes\n        repeat\n        private\n        startedAt {\n          year\n          month\n          day\n        }\n        completedAt {\n          year\n          month\n          day\n        }\n        media {\n          ...baseMedia\n        }\n      }\n    }\n  }\n}\n\nquery SearchAnimeShortMedia($page: Int, $perPage: Int, $sort: [MediaSort], $search: String, $status: [MediaStatus]) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n    }\n    media(\n      type: ANIME\n      search: $search\n      sort: $sort\n      status_in: $status\n      isAdult: false\n      format_not: MUSIC\n    ) {\n      ...basicMedia\n    }\n  }\n}\n\nquery BasicMediaByMalId($id: Int) {\n  Media(idMal: $id, type: ANIME) {\n    ...basicMedia\n  }\n}\n\nquery BasicMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...basicMedia\n  }\n}\n\nquery BaseMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...baseMedia\n  }\n}\n\nquery MediaDetailsById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    siteUrl\n    id\n    duration\n    genres\n    averageScore\n    popularity\n    meanScore\n    description\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    studios(isMain: true) {\n      nodes {\n        name\n      }\n    }\n    rankings {\n      context\n      type\n      rank\n      year\n      format\n      allTime\n      season\n    }\n    recommendations(page: 1, perPage: 8, sort: RATING_DESC) {\n      edges {\n        node {\n          mediaRecommendation {\n            id\n            coverImage {\n              extraLarge\n              large\n              medium\n              color\n            }\n            bannerImage\n            title {\n              romaji\n              english\n              native\n              userPreferred\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nquery CompleteMediaById($id: Int) {\n  Media(id: $id, type: ANIME) {\n    ...completeMedia\n  }\n}\n\nquery ListMedia($page: Int, $search: String, $perPage: Int, $sort: [MediaSort], $status: [MediaStatus], $genres: [String], $averageScore_greater: Int, $season: MediaSeason, $seasonYear: Int, $format: MediaFormat) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n      total\n      perPage\n      currentPage\n      lastPage\n    }\n    media(\n      type: ANIME\n      search: $search\n      sort: $sort\n      status_in: $status\n      isAdult: false\n      format: $format\n      genre_in: $genres\n      averageScore_greater: $averageScore_greater\n      season: $season\n      seasonYear: $seasonYear\n      format_not: MUSIC\n    ) {\n      ...basicMedia\n    }\n  }\n}\n\nquery ListRecentMedia($page: Int, $perPage: Int, $airingAt_greater: Int, $airingAt_lesser: Int) {\n  Page(page: $page, perPage: $perPage) {\n    pageInfo {\n      hasNextPage\n      total\n      perPage\n      currentPage\n      lastPage\n    }\n    airingSchedules(\n      notYetAired: false\n      sort: TIME_DESC\n      airingAt_greater: $airingAt_greater\n      airingAt_lesser: $airingAt_lesser\n    ) {\n      id\n      airingAt\n      episode\n      timeUntilAiring\n      media {\n        ...basicMedia\n      }\n    }\n  }\n}\n\nfragment basicMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n}\n\nfragment baseMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n  relations {\n    edges {\n      relationType(version: 2)\n      node {\n        ...basicMedia\n      }\n    }\n  }\n}\n\nfragment completeMedia on Media {\n  id\n  idMal\n  siteUrl\n  status(version: 2)\n  season\n  type\n  format\n  bannerImage\n  episodes\n  synonyms\n  isAdult\n  countryOfOrigin\n  duration\n  genres\n  averageScore\n  popularity\n  meanScore\n  title {\n    userPreferred\n    romaji\n    english\n    native\n  }\n  coverImage {\n    extraLarge\n    large\n    medium\n    color\n  }\n  startDate {\n    year\n    month\n    day\n  }\n  endDate {\n    year\n    month\n    day\n  }\n  nextAiringEpisode {\n    airingAt\n    timeUntilAiring\n    episode\n  }\n  relations {\n    edges {\n      relationType(version: 2)\n      node {\n        ...basicMedia\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetViewer {\n  Viewer {\n    name\n    avatar {\n      large\n      medium\n    }\n    bannerImage\n    isBlocked\n    options {\n      displayAdultContent\n      airingNotifications\n      profileColor\n    }\n  }\n}"): (typeof documents)["query GetViewer {\n  Viewer {\n    name\n    avatar {\n      large\n      medium\n    }\n    bannerImage\n    isBlocked\n    options {\n      displayAdultContent\n      airingNotifications\n      profileColor\n    }\n  }\n}"];

export function graphql(source: string) {
    return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;