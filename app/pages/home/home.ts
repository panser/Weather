import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {AddPage} from "../add/add";
import {Weather} from "../../providers/weather/weather";
import {TemperaturePipe} from "../../pipes/Temperature";
import {ForecastPage} from "../forecast/forecast";
import {WeatherEl} from "../../components/weather/weather";
import {StorageService} from "../../providers/storage/storage";

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Weather],
  pipes: [TemperaturePipe],
  directives: [WeatherEl],
})
export class HomePage {
  public weatherList = [];
  public localWeather: Object;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private weather: Weather,
              private storage: StorageService
  ) {
    this.getLocalWeather();
    this.getStoredWeather();
  }
  
  getStoredWeather(){
    this.storage.getWeathers().then((weathers) => {
      this.weatherList = JSON.parse(weathers) || [];
    })
  }

  addWeather(){
    let addWeatherModal = this.modalCtrl.create(AddPage);
    addWeatherModal.onDidDismiss((data) => {
      if(data){
        this.getWeather(data.city, data.country);
      }
    });
    addWeatherModal.present()
  }

  getWeather(city: string, country:string){
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(data => {
        this.weatherList.push(data);
        this.storage.setWeather(data);
      },
      err => console.log(err),
      () => console.log('getWeather completed')
      )
  }

  viewForecast(cityWeather){
    console.log('view forecast');
    this.navCtrl.push(ForecastPage, {cityWeather: cityWeather});
  }

  getLocalWeather(){
    this.weather.local().subscribe(
      data => {
        this.localWeather = data;
      }
    )
  }

}
