import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";
import {Geolocation} from 'ionic-native';
/*
  Generated class for the Weather provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Weather {
  private appId = '16fa7fe6fab8c648bee7e5d70266906e';
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(private http: Http) {}

  city(city: string, country: string){
    let url = this.baseUrl + 'weather';
    url += '?appId=' + this.appId;
    url += '&q=' + city;
    url += ',' + country;

    return this.http.get(url);
  }

  forecast(cityId: string, numOfDays: number){

    let url = this.baseUrl + 'forecast/daily';
    url += '?appId=' + this.appId;
    url += '&id=' + cityId;
    url += '&cnt=' + numOfDays;

    return this.http.get(url);
  }

  local(){

    let Obs = Observable.create(observer => {

      Geolocation.getCurrentPosition().then((resp => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;

        let url = this.baseUrl + 'weather';
        url += '?appId=' + this.appId;
        url += `&lat=${lat}&lon=${lng}`;

        this.http.get(url)
          .subscribe(data =>{
            observer.next(data.json());
          },
            err => {
              observer.error(err)
            },
            () => observer.complete()
          )
      }))
    });

    return Obs;
  }
}

