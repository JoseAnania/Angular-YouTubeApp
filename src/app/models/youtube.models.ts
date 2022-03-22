/* Copiamos la respuesta de la petición GET de la Playlist y usamos QuickType para obtener el tipado y definir el modelo (es como usar una Interface)*/

export interface YouTubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Video;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
    publishedAt:            Date;
    channelId:              ChannelID;
    title:                  string;
    description:            string;
    thumbnails:             Thumbnails;
    channelTitle:           ChannelTitle;
    playlistId:             PlaylistID;
    position:               number;
    resourceId:             ResourceID;
    videoOwnerChannelTitle: ChannelTitle;
    videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
    UCvbTYgbzLcCginSC03Fhmwg = "UCvbTYgbzLcCginSC03fhmwg",
}

export enum ChannelTitle {
    UrbanRoosters = "Urban Roosters",
}

export enum PlaylistID {
    UUvbTYgbzLcCginSC03Fhmwg = "UUvbTYgbzLcCginSC03fhmwg",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
