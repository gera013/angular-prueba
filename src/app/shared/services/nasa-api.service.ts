import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable()
export class NasaApiService {

  private readonly DATA: Apod = {
    date: "2017-11-08",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, cupiditate? Quaerat distinctio ipsa, doloribus alias vero dolores iste ratione culpa quae mollitia nam eveniet commodi, animi non dignissimos sint. Vero!",
    hdurl: "http://bloody-disgusting.com/wp-content/uploads/2014/07/img-web-the-strain-1400x750.jpg",
    media_type: "image",
    service_version: "v1",
    title: "NGC 2261: Hubble's Variable Nebuka",
    url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/09/estos-son-19-luchadores-comic-marvel-vs-capcom-infinite_16.jpg?itok=wd6pJn_T",
  };

  constructor() {
  }

  getApod(): Apod {
    return this.DATA;
  }

}
