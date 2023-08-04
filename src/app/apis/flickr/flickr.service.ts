import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private apiKey = 'aecbc0a1491f061f53c919ca37cefd0a';
  private apiUrl = 'https://api.flickr.com/services/rest/';

  constructor(private http: HttpClient) { }

  getAlbum(albumId: string) {
    const url = `${this.apiUrl}?method=flickr.photosets.getPhotos&api_key=${this.apiKey}&photoset_id=${albumId}&format=json&nojsoncallback=1`;

    return this.http.get(url);
  }
}
