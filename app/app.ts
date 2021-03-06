import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import {TemperaturePipe} from "./pipes/Temperature";
import {Weather} from "./providers/weather/weather";
import {StorageService} from "./providers/storage/storage";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Weather, StorageService],
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
