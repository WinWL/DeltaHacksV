import { Component, OnInit } from '@angular/core';
import { TNSRecorder } from 'nativescript-audio';
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
import { Observable } from "tns-core-modules/data/observable";
import * as Permissions from "nativescript-permissions";
declare var android: any;
import { android as androidApp, ios as iosApp } from "tns-core-modules/application";


@Component({
  selector: 'ns-mic-impl',
  templateUrl: './mic-impl.component.html',
  styleUrls: ['./mic-impl.component.css'],
  moduleId: module.id,
})
export class MicImplComponent implements OnInit {

  micRecorder:TNSRecorder;
  vm = new Observable();


  constructor() { }

  ngOnInit() {
    console.log(TNSRecorder.CAN_RECORD());

   this.micRecorder = new TNSRecorder();

  }

  make() {
    if (androidApp) {
      console.log("We are running on Android device!");
      let appContext = androidApp.context;

      appContext.

    }

    const documents: Folder = knownFolders.documents();
    const folder: Folder = documents.getFolder("TestFolder");
    const file: File = folder.getFile(`test` + `.txt`);

    console.log("Make", folder, file );

    file.writeText('Hello')
        .then(() => {
            file.readText()
                .then((res) => {
                    console.log(res);
                });
        }).catch((err) => {
            console.log(err);
      });

  }

  start(){
    console.log("Start")

    const documents: Folder = knownFolders.documents();
    const folder: Folder = documents.getFolder("TestFolder");
    const file: File = documents.getFile(`microphone` + `.wav`);  

    console.log(file.path)
    
    this.micRecorder.requestRecordPermission().then(() => {
      if (TNSRecorder.CAN_RECORD()) {
  
        let recorder = new TNSRecorder();
        let data = new Observable()

        var recorderOptions = {
    
          filename: file.path,
          infoCallback: function () {
            console.log('infoCallback');
          },
          errorCallback: function () {
            console.log('errorCallback');
            alert('Error recording.');
          }
        };
    
      console.log('RECORDER OPTIONS: ' + recorderOptions);
      recorder.start(recorderOptions).then(function (res) {
          data.set('isRecording', true);
      }, function (err) { 
          data.set('isRecording', false);
          console.log('ERROR: ' + err);
      })
      }

     // this.micRecorder.start(recorderOptions)
    })
    
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
