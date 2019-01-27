import { Component, OnInit } from '@angular/core';
import * as accelerometer from 'nativescript-accelerometer'; // Requiring the plugin module 
import { XYZData } from './acceleromterClasses';
import { Observable, observable } from 'rxjs';
import { SaveFileComponent } from './../save-file/save-file.component';

@Component({
  selector: 'ns-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css'],
  moduleId: module.id,
})
export class AccelerometerComponent implements OnInit {

  display: string;

  xCoordinate: number = 5;
  yCoordinate: number = 6;  
  zCoordinate: number = 7;
  xyzAccelerometer: XYZData[];
  sensorDelay = 'ui';
  obs = new Observable();
  fileContent : string;

  constructor() { }

  ngOnInit() {
    
    let xyzaccelerometer = [];
    this.xyzAccelerometer = xyzaccelerometer;
    this.collectingData(xyzaccelerometer);

    this.display = 'Hello world'; 
  }

  updateData(data: XYZData){
    if (this.xyzAccelerometer !== null) {
      this.xyzAccelerometer.push(data);
    }
  }

  onButtonTap(){
    console.log('hello world')
    console.log(this.xyzAccelerometer);
    this.collectingData(this.xyzAccelerometer);
    //console.log(this.xyzAccelerometer[this.xyzAccelerometer.length - 1])
  }

  pauseButton(){
    accelerometer.stopAccelerometerUpdates();
    console.log('should stop')
  }

  collectingData(listOfVals){
    accelerometer.startAccelerometerUpdates( function(data) 
      {
          // this.xyzAccelerometer.push(data)
          // console.log(" x: " + data.x + " y: " + data.y + " z: " + data.z);
          // console.log(data.display());
          let xyzPoint = new XYZData();
            xyzPoint.x = data.x;
            xyzPoint.y = data.y;
            xyzPoint.z = data.z;
            console.log(xyzPoint.toString());
            listOfVals.push(xyzPoint);
        }, 
      { sensorDelay: "ui" });
  }

  // stop collecting data and end the night
  finishCollection(){
    this.pauseButton();
    let x = new SaveFileComponent();
    x.onCreateFile(this.xyzAccelerometer);
    this.fileContent = x.fileTextContent;
    console.log("is in the file!" + x.fileTextContent);
  }

}