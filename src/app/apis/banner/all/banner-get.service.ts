import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerGetService {

  domain = 'https://willianmedina.com.co/willianmedina/api/';
  endpoint = 'banner/banner.php'
  constructor(
    private http:HttpClient
  ) { }

  ALL_GET(items:any): Observable<any> {
    return this.http.get(`${this.domain + this.endpoint + items}`, {
      observe: 'response'
    });
  }
}
