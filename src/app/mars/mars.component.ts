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
  camaras: string[] = ['MAST', 'CHEMCAM', 'NAVCAM'];
  currentCamara: string;
  // Inyeccion de dependecias
  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.currentCamara = this.camaras[2];
    this.refreshView(this.currentCamara);
  }

  onSelectCamara(camara: string) {
    this.refreshView(camara);
  }

  private refreshView(camara: string) {
    this.servicio.getMarsImages(camara)
    .subscribe(result => {
      this.marsImages = result.photos;
    });
  }

}
