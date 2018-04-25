import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  constructor() { }
  usuario = {
    nombre: 'Luis'
  };

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = 'Gerardo';
    }, 2000);
  }

}
