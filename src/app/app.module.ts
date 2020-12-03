import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/home/components/banner/banner.component';
import { ForecastComponent } from './components/home/components/forecast/forecast.component';
import { InformationComponent } from './components/home/components/information/information.component';
import { OtherCityComponent } from './components/home/components/other-city/other-city.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    ForecastComponent,
    InformationComponent,
    OtherCityComponent
  ],
  exports:[
    BannerComponent,
    ForecastComponent,
    InformationComponent,
    OtherCityComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
