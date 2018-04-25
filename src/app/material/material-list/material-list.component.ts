import { Component, OnInit } from '@angular/core';
import {Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';
@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  listaEstudiantes: Estudiante[];

  readonly DEFAULT_PICTURE = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiante1 = new ClassEstudiante(1, 'Luis Aviles' , 'Cochabamba');
    console.log('edad.estudiante1:', this.estudiante1.getEdad());
    this.estudiante2 = {
      id: 2,
      nombre: 'Jorge Perez',
      ciudad: 'Lima',
      fotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrKe8qGxq4q3xkJcV2cYaoc493bueM1oEYczh-JgH7vgmEcfERw'
    };

    this.estudiante3 = {
      id: 3,
      nombre: 'Maria Rodriguez',
      ciudad: 'Bogota',
      fotoURL: 'http://sobrancelhas.com/wp-content/uploads/2017/09/11_10.png'
    };

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2,
      this.estudiante3
    ];

    setTimeout(() => {
      this.listaEstudiantes[2] = {
        id: 4,
        nombre: 'Juan Lopez',
        ciudad: 'Santiago'
      };
    }, 3000);

  }

}
