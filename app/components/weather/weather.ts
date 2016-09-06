import { Component } from '@angular/core';

/*
  Generated class for the Weather component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'weather',
  templateUrl: 'build/components/weather/weather.html'
})
export class Weather {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
