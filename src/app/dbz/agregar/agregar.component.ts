import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //recibe el valor del padre
  @Input() nuevo!: Personaje;

  // //emitir el valor al padre
  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(
    private dbzService: DbzService
  ){}

  vacio: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    console.log(this.nuevo);

    // this.onNewPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonajes(this.nuevo)

    this.nuevo = this.vacio;
  }

}
