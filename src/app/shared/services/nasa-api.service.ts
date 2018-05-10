import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const API_KEY = 'DSqKAXJAiiea5b2ANXJ9ulzzBmDsuVnkO9qIen9a';
//const API_KEY = 'DSqKAXJAiiea5b2ANXJ9ulzzBmDsuVnkO9qIen9a';

@Injectable()
export class NasaApiService {

  // Dependecy injection: httpclient
  constructor(private httpClient: HttpClient) {
  }

  getApod(): Observable<Apod> {
    // return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
    // template literals
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }

  getMarsImages(camara: string): Observable<any> {
  return this.httpClient.get(`${MARS_URL}&camera=${camara}&api_key=${API_KEY}`);
  }

}
