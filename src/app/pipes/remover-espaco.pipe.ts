import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removerEspaco',
  standalone: true
})
export class RemoverEspacoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\s/g, '');
  }

}
