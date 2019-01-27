import { Component, OnInit } from '@angular/core';
import { TNSRecorder } from 'nativescript-audio';
import { knownFolders, Folder, File } from "tns-core-modules/file-system";


@Component({
  selector: 'ns-mic-impl',
  templateUrl: './mic-impl.component.html',
  styleUrls: ['./mic-impl.component.css'],
  moduleId: module.id,
})
export class MicImplComponent implements OnInit {

  micRecorder:TNSRecorder;

  constructor() { }

  ngOnInit() {
    console.log(TNSRecorder.CAN_RECORD());

   this.micRecorder = new TNSRecorder();
  }



  start(){
    console.log("Start")
    let aOption: AudioRecorderOptions = new AudioRecorderOptions();
      aOption.filename = "test.wav"

    this.micRecorder.start(aOption)
  }

  stop(){
    console.log("Stop")

    this.micRecorder.stop();
  }

  test(){
    console.log("Test");

    console.log("Test " + this.micRecorder.getMeters());
  }

}

class AudioRecorderOptions {
  filename: string;
}
