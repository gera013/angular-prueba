import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';
@Component({
  selector: 'ed-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
  marsImages: MarsImage[];

  // Inyeccion de dependecias
  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.servicio.getMarsImages('CHEMCAM')
    .subscribe(result => {
      this.marsImages = result.photos;
    });
  }

}
