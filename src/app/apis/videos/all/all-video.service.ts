import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AllVideoService {

  domain = 'https://willianmedina.com.co/willianmedina/api/';
  endpoint = 'videos/videos.php'
  constructor(
    private http:HttpClient
  ) { }

  ALL_GET(items:any): Observable<any> {
    return this.http.get(`${this.domain + this.endpoint + items}`, {
      observe: 'response'
    });
  }

  UPDATE(items:any, data:any): Observable<any> {
    return this.http.post(`${this.domain + this.endpoint + items}`, data, {
      observe: 'response'
    });
  }
}
