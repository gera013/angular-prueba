import { Component, OnInit } from '@angular/core';
import {Estudiante } from '../../shared/model/estudiante';
@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiante1 = {
      id: 1,
      nombre: 'Luis Aviles',
      ciudad: 'Cochabamba',
      fotoURL: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg',
    };

    this.estudiante2 = {
      id: 2,
      nombre: 'Jorge Perez',
      ciudad: 'Lima'
    };

    this.estudiante3 = {
      id: 3,
      nombre: 'Maria Rodriguez',
      ciudad: 'Bogota'
    };
  }

}
