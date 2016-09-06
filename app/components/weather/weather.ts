import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IONIC_DIRECTIVES} from "ionic-angular/index";
import {TemperaturePipe} from "../../pipes/Temperature";

/*
  Generated class for the Weather component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'weather',
  templateUrl: 'build/components/weather/weather.html',
  directives: [IONIC_DIRECTIVES],
  pipes: [TemperaturePipe],
})
export class WeatherEl {

  @Input() weather: Object;
  @Output() viewMore: EventEmitter<Object> = new EventEmitter();

  constructor() {
  }

  hitWeather(){
    this.viewMore.next(this.weather);
  }
}
