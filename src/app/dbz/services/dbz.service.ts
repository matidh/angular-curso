import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 450
    },    
    {
      nombre: 'Goku',
      poder: 1000
    },
    {
      nombre: 'Vegeta',
      poder: 2000
    }
  ];

  get personajes(): Personaje[]{
    return[...this._personajes];
  }

  constructor() {}

  agregarPersonajes( personaje: Personaje ){
    this._personajes.push( personaje )
  }


}
