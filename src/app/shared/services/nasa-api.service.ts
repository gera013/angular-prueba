import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

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

}
