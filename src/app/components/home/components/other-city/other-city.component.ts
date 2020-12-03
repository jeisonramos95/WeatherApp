import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-other-city',
  templateUrl: './other-city.component.html',
  styleUrls: ['./other-city.component.scss']
})
export class OtherCityComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.checkWeatherLyon();
    this.checkWeatherParis();
  }

  checkWeatherParis() {
    this.homeService.GetWeather('Paris').subscribe(data => {
      console.log('Weather Paris', data);
    });
  }

  checkWeatherLyon() {
    this.homeService.GetWeather('Lyon').subscribe(data => {
      console.log('Weather Lyon', data);
    });
  }

}
