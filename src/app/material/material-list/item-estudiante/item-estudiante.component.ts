import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from '../../../shared/model/estudiante';

@Component({
  selector: 'ed-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
  @Input()
  estudiante: Estudiante;

  @Output()
  onMouseClick = new  EventEmitter<Estudiante>()
  constructor() { }

  ngOnInit() {
  }

  onClick(e: Estudiante) {
    this.onMouseClick.emit(e);
  }


}
