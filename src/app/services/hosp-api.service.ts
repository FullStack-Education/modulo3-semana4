import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospAPIService {
  httpClient = inject(HttpClient);
  url = "[sua_url_aqui]";

  constructor() { }

  /**
   * Método que utiliza o método HTTP [GET] para 
   * listar os pacientes da minha api na plataforma mockAPI.
   * 
   * @returns Observable - Lista de pacientes
   */
  list(){
    let headers = new HttpHeaders();
    return this.httpClient.get(`${this.url}/api/hospital/paciente`, { headers: headers});
  }

  /**
   * Método que utiliza o método HTTP [GET] para capturar informações sobre um paciente
   * 
   * @param id: string - identificador do paciente
   * @returns Observable - retorna apenas o paciente indicado pelo parâmetro id
   */
  getById(id: string){
    let headers = new HttpHeaders();
    return this.httpClient.get(`${this.url}/api/hospital/paciente/${id}`, {headers: headers});
  }
}
