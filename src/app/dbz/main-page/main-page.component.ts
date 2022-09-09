import { Component } from '@angular/core';

import { Personaje } from '../interfaces/personaje';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(){}

  // agregarNuevoPersonaje(argumento:Personaje){
  //   // console.log(argumento)
  //   // debugger;
  //   this.personajes.push(argumento)
  // }

}
