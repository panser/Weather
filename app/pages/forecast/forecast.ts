import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Weather} from "../../providers/weather/weather";
import {TemperaturePipe} from "../../pipes/Temperature";

/*
  Generated class for the ForecastPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/forecast/forecast.html',
  providers: [Weather],
  pipes: [TemperaturePipe],
})
export class ForecastPage {
  public cityWeather;
  public forecast = [];

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private weather: Weather
  ) {
    this.cityWeather = navParams.get('cityWeather');
    this.getForecast(this.cityWeather.id)
  }

  getForecast(cityId){
    this.weather.forecast(cityId, 7)
      .map(data => data.json())
      .subscribe(data => {
        this.forecast = data.list;
      },
      err => console.log(err),
      () => console.log('forecast complete')
      )
  }

}
