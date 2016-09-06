import { Component } from '@angular/core';
import {NavController, Modal} from 'ionic-angular';
import {AddPage} from "../add/add";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  addWeather(){
    let addWeatherModal = Modal.create(AddPage);
    
    this.navCtrl.present(addWeatherModal);
  }
}
