import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aula-02',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aula-02.component.html',
  styleUrl: './aula-02.component.scss'
})
export class Aula02Component {
  users: any[] = [
    { name: 'John Doe', profile: 'admin' },
    { name: 'Jane Doe', profile: 'professor' },
    { name: 'Alice', profile: 'professor' },
    { name: 'Bob', profile: 'admin' },
    { name: 'Charlie', profile: 'aluno' },
    { name: 'David', profile: 'aluno' },
    { name: 'Eve', profile: 'admin' },
  ]
  
  // items = [
  //   {
  //       nome: 'item 1',
  //       valor: 10
  //   },
  //   {
  //       nome: 'item 2',
  //       valor: 20
  //   },
  //   {
  //       nome: 'item 2'
  //   }
  // ]

}
