import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoAllService {

  domain = 'https://willianmedina.com.co/willianmedina/api/';
  endpoint = 'contacto/contacto.php'
  constructor(
    private http:HttpClient
  ) { }

  ALL(items:any): Observable<any> {
    return this.http.get(`${this.domain + this.endpoint + items}`, {
      observe: 'response'
    });
  }

  CREATE(data:any): Observable<any> {
    return this.http.post(`${this.domain + this.endpoint}`, data, {
      observe: 'response'
    });
  }

}
