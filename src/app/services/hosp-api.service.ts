import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospAPIService {
  httpClient = inject(HttpClient);
  url = "[sua_url_aqui]";

  constructor() { }

  list(){
    let headers = new HttpHeaders();
    return this.httpClient.get(`${this.url}/api/hospital/paciente`, { headers: headers});
  }

  getById(id: string){
    let headers = new HttpHeaders();
    return this.httpClient.get(`${this.url}/api/hospital/paciente/${id}`, {headers: headers});
  }
}
