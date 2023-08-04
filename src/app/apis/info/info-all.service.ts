import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoAllService {

  domain = 'https://willianmedina.com.co/willianmedina/api/';
  endpoint = 'info/info.php?id=1'
  constructor(
    private http:HttpClient
  ) { }

  GET(): Observable<any> {
    return this.http.get(`${this.domain + this.endpoint}`, {
      observe: 'response'
    });
  }

  UPDATE(data:any): Observable<any> {
    return this.http.post(this.domain + this.endpoint, data, {
      observe: 'response'
    });
  }
}
