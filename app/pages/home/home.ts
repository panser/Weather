import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {AddPage} from "../add/add";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public weatherList = [];
  
  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController
  ) {

  }

  addWeather(){
    let addWeatherModal = this.modalCtrl.create(AddPage);
    addWeatherModal.onDidDismiss((data) => {
      this.weatherList.push(data);
    });
    addWeatherModal.present()
  }
}
