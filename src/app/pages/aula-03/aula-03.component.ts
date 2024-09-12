import { Component, inject } from '@angular/core';
import { HospAPIService } from '../../services/hosp-api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-aula-03',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './aula-03.component.html',
  styleUrl: './aula-03.component.scss'
})
export class Aula03Component {
  pacientes: any[] = [];
  hospApiService = inject(HospAPIService);


  ngOnInit(){
    this.hospApiService.list().subscribe({
      next: (lista: any)=>{
        this.pacientes = lista;
      },
      error: (erro:any)=>{
        console.error("Erro: ", erro);
      }
    })
  }

}
