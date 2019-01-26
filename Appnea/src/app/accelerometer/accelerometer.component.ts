import { Component, OnInit } from '@angular/core';
import * as accelerometer from 'nativescript-accelerometer'; // Requiring the plugin module 

@Component({
  selector: 'ns-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css'],
  moduleId: module.id,
})
export class AccelerometerComponent implements OnInit {

  display: string;

  xCoor: number;
  yCoor: number;
  zCoor: number;


  sensorDelay = 'ui';

  constructor() { }

  ngOnInit() {


    accelerometer.startAccelerometerUpdates(function(data) {
      console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);

      this.xCoor = data.x;
      this.yCoor = data.y;
      this.zCoor = data.z;

  }, { sensorDelay: "ui" });

    this.display = 'Hello world'; 

  }




}
