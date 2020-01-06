import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../dataservice/dataservice.component";

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
  lat : number;   
  lng : number;
  city: string;
  temp: number;
  imageSrc;


  constructor(private http: HttpClient,private data:DataService) { }

  ngOnInit() {
    let imageUrl = '';
    this.data.currentMessage.subscribe(message => this.lat = parseFloat(message))
    this.data.currentMessage2.subscribe(message2 => this.lng = parseFloat(message2))
    let url = 'http://api.openweathermap.org/data/2.5/weather?'
             + 'lat=' + this.lat
             + '&lon=' + this.lng
             + '&units=metric'
             + '&lang=en'
             + '&appid=1e4b78c35affa2c882f39c6b51b59b51'; // Put your API key here!
             this.http
      .get(url)
      .subscribe((weatherData: any) => {
        console.log(weatherData);
        this.city = weatherData.name;
        this.temp = weatherData.main.temp;
        console.log(imageUrl)
        fetch("https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png").then(res => {
        if (res.url) {
          this.imageSrc = res.url;
          console.log(this.imageSrc);
        }
      });
      });
      
  } 
}
