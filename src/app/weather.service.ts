import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

    constructor(private http: HttpClient) { }


  getweather(city: string) { 
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + '37dfaef5356ec034e065327cdd3b0093' + '&units=metric')
  }
}