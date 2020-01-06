import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../dataservice/dataservice.component";
import { Data } from '@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})

export class View3Component implements OnInit {
  city: string;
  lLat: number; lLng: number;rLat: number; rLng: number;
  addition: 0.005;
  bus: any[];
  specificBus: any[];
  closestStops: any[];
  url = 'http://data.itsfactory.fi/journeys/api/1/lines'

  constructor(private http: HttpClient,private data:DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.lLat = parseFloat(message)-0.005)
    this.data.currentMessage2.subscribe(message2 => this.lLng = parseFloat(message2)-0.005)
    this.data.currentMessage.subscribe(message => this.rLat = parseFloat(message)+0.005)
    this.data.currentMessage2.subscribe(message2 => this.rLng = parseFloat(message2)+0.005)
             this.http
      .get(this.url)
      .subscribe((weatherData: any) => {
        console.log(weatherData);
        this.bus = weatherData['body'];
        console.log(this.bus);
      });
      this.getClosestBusStops()
  }

  searchBus(title:string) {
    if(title)
    {
    this.http
      .get(this.url+'?description='+title)
      .subscribe((weatherData: any) => {
        console.log(weatherData);
        this.specificBus = weatherData['body'];
        console.log(this.specificBus);
      });
    }
  }

  getClosestBusStops()
  {
    let url = "http://data.itsfactory.fi/journeys/api/1/stop-points?location="
    this.http
      .get(url+this.lLat+","+this.lLng+":"+this.rLat+","+this.rLng)
      .subscribe((weatherData: any) => {
        console.log(weatherData);
        this.closestStops = weatherData['body'];
        console.log(this.closestStops);
      });
    }
  }
