import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Las declarations son los componentes que serán utilizados en la aplicación
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //En los exports van las cosas que serán visibles
    //desde el modulo actual al resto de la aplicacion
    exports: [
        ListadoComponent
    ],

    //Los imports son los modulos que serán utilizados dentro de la aplicación
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}