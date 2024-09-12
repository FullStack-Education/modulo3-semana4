import { Component } from '@angular/core';
import { RemoverEspacoPipe } from '../../pipes/remover-espaco.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aula-01',
  standalone: true,
  imports: [ RemoverEspacoPipe, FormsModule ],
  templateUrl: './aula-01.component.html',
  styleUrl: './aula-01.component.scss'
})
export class Aula01Component {
  nome: string = '';
  
}
