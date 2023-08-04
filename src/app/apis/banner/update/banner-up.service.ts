import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerUpService {

  domain = 'https://willianmedina.com.co/willianmedina/api/';
  endpoint = 'banner/banner.php?id=1'
  constructor(
    private http:HttpClient
  ) { }

  UPDATE(data:any): Observable<any> {
    return this.http.post(this.domain + this.endpoint, JSON.stringify(data), {
      observe: 'response'
    });
  }
}
