import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.checkWeather();
  }
  checkWeather() {
    this.homeService.GetWeather('Bogota').subscribe(data => {
      console.log('Weather Bogota', data);
    });
  }
}
