import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
   // this.checkForecast();
  }

  checkForecast() {
    this.homeService.GetForescat('Bogota').subscribe(data => {
      console.log('Forecast', data);
    });
  }

}
