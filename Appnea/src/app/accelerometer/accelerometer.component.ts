import { Component, OnInit } from '@angular/core';
import * as accelerometer from 'nativescript-accelerometer'; // Requiring the plugin module 
import { XYZData } from './acceleromterClasses';

@Component({
  selector: 'ns-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css'],
  moduleId: module.id,
})
export class AccelerometerComponent implements OnInit {

  display: string;

  xCoordinate: number;
  yCoordinate: number;
  zCoordinate: number;
  xyzAccelerometer: XYZData[] = [];


  sensorDelay = 'ui';

  constructor() { }

  ngOnInit() {


    accelerometer.startAccelerometerUpdates(function(data) {
      console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);

      this.xCoordinate = data.x;
      this.yCoordinate = data.y;
      this.zCoordinate = data.z;

      let xyz = new XYZData();
        xyz.x = this.xCoordinate;
        xyz.y = this.yCoordinate;
        xyz.z = this.zCoordinate;

      this.xyzAccelerometer.push(xyz)

  }, { sensorDelay: "ui" });

    this.display = 'Hello world'; 

  }




}
