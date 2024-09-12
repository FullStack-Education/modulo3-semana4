import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {
  httpClient = inject(HttpClient); //injeção de dependência
  constructor() { }

  //exemplos para comparar do front pro back
  create(bodyObj: any){
    //se no backend estiver assim:
    // @PostMapping("/create")
    // public ExemploResponseDTO salvar(@RequestBody ExemploRequestDTO body) {
    // 
    // }

    //no front vai ser assim:
    let headers = new HttpHeaders();
    return this.httpClient.post("localhost:8080/create", bodyObj, { headers: headers});
  }

  list(){
    //se no backend estiver assim:
    // @GetMapping("/list")
    // public List<ExemploResponseDTO> listar(@RequestHeader("token") String token) {
    // 
    // }

    //no front vai ser assim:
    let headers = new HttpHeaders();
    headers = headers.set('token', '');
    return this.httpClient.get("localhost:8080/list", { headers: headers});
  }

  getById(id: string){
    //se no backend estiver assim:
    // @GetMapping("/get/{id}")
    // public ExemploResponseDTO get(
    //                  @PathVariable String id, 
    //                  @RequestHeader("token") String token) {
    // 
    // }

    //no front vai ser assim:
    let headers = new HttpHeaders();
    headers = headers.set('token', '');
    return this.httpClient.get("localhost:8080/get/"+id, { headers: headers});
  }

  update(bodyObj: any){
    //se no backend estiver assim:
    // @PutMapping("/update")
    // public ExemploResponseDTO atualizar(@RequestBody ExemploRequestDTO body) {
    // 
    // }

    //no front vai ser assim:
    let headers = new HttpHeaders();
    return this.httpClient.put("localhost:8080/update", bodyObj, { headers: headers});
  }

  delete(id: string){
    //se no backend estiver assim:
    // @DeleteMapping("/delete/{id}")
    // public ExemploResponseDTO deletar(
    //                  @PathVariable String id, 
    //                  @RequestHeader("token") String token) {
    // 
    // }

    //no front vai ser assim:
    let headers = new HttpHeaders();
    headers = headers.set('token', '');
    return this.httpClient.delete("localhost:8080/delete/"+id, { headers: headers});
  }
}
