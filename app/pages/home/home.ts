import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {AddPage} from "../add/add";
import {Weather} from "../../providers/weather/weather";
import {TemperaturePipe} from "../../pipes/Temperature";

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [Weather],
  pipes: [TemperaturePipe],
})
export class HomePage {
  public weatherList = [];

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private weather: Weather
  ) {

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
      },
      err => console.log(err),
      () => console.log('getWeather completed')
      )
  }

  viewForecast(cityWeather){
    console.log('view forecast');
  }

}
