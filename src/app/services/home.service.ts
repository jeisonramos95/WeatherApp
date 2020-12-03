import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  GetWeather(city: string) {
    return this.httpClient.get(environment.urlWeather+ '?q=' + city + '&appid=' + environment.apiKey);
  }
}
