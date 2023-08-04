import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeGetService {

  domain = 'https://willianmedina.com.co/willianmedina/api/';
  endpoint = 'me/me.php'
  constructor(
    private http:HttpClient
  ) { }

  GET_SHORT(items:any): Observable<any> {
    return this.http.get(`${this.domain + this.endpoint + items}`, {
      observe: 'response'
    });
  }

  UPDATE(data:any): Observable<any> {
    return this.http.post(this.domain + 'me/me.php?id=1', data, {
      observe: 'response'
    });
  }
}
