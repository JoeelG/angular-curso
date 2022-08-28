import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    template: `
        <!--Entre las dobles llaves, se pone la referencia
        a un componente definido, en este caso, en
        app.component.ts-->
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>
        <!--Entre parentesis se pone una propiedad
        del elemento html para que sea reconocida
        y manejada por angular-->
        <button (click)="acumular(+base)">+{{ base }} </button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)">-{{ base }} </button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 3;
    //Crear metodo para manejar incremento y
    //decremento del valor
    acumular(valor: number){
      this.numero += valor;
    }
  }
