import * as $ from 'jquery';
import { MouseEvent } from '@agm/core'; 
import { Component, OnInit } from '@angular/core';
import { DataService } from "../dataservice/dataservice.component";
import { Data } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  lat ;
  lng ;
  zoom = 10;
  message:string;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.lat = parseFloat(message))
    this.data.currentMessage2.subscribe(message2 => this.lng = parseFloat(message2))
  }

  mapClicked($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.data.changeMessage(String(this.lat),String(this.lng))
  }

}
