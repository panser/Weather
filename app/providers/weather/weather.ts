import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
}

