/* Servicio creado para el manejo general de la App */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YouTubeResponse } from '../models/youtube.models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  // creamos las propiedades para el manejo de las peticiones http de las APIs de YouTube
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyCqxXl4DlbfG4tBlcuQzqHxsfJwDNVlnUY';
  private playlist = 'UUvbTYgbzLcCginSC03fhmwg';
  private nextPageToken = ''; 

  // inyectamos el HttpClient que permite el uso de las Apis
  constructor( private http: HttpClient ) { }

  // método de petición GET de la Playlist
  getVideos() {
    
    // creamos una constante y definimos los Parámetros para que la petición no sea tan larga
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
        .set('part', 'snippet')
        .set('maxResults', '10')
        .set('playlistId', this.playlist)
        .set('key', this.apiKey)
        .set('pageToken', this.nextPageToken)
        
        // retornamos la petición agregando el Tipado y lo pasamos por un Pipe para obtener sólo los videos (y no toda la info que viene)
        return this.http.get<YouTubeResponse>( url, {params} )
            .pipe(
              map( resp => {
                this.nextPageToken = resp.nextPageToken;
                return resp.items;
              }),
              map( items => items.map(video => video.snippet))
            )
  }
}
