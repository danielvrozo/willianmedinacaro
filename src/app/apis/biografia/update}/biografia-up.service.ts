import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiografiaUpService {

  domain = 'https://willianmedina.com.co/willianmedina/api/';
  endpoint = 'biografia/biografia.php?id=1'
  constructor(
    private http:HttpClient
  ) { }

  UPDATE(items:any, data:any): Observable<any> {
    return this.http.post(`${this.domain + this.endpoint + items}`, data, {
      observe: 'response'
    });
  }
}
