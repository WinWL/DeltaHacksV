import { Component, OnInit } from '@angular/core';
import { TNSRecorder } from 'nativescript-audio';

@Component({
  selector: 'ns-mic-impl',
  templateUrl: './mic-impl.component.html',
  styleUrls: ['./mic-impl.component.css'],
  moduleId: module.id,
})
export class MicImplComponent implements OnInit {

	private __recorder: TNSRecorder;

	constructor() {

		isAndroid = false;

		// check platform
		if (application.android) { 
			console.log("We are running on Android device!");
			isAndroid = true;
		} 
		else if (application.ios) {
			console.log("We are running on iOS device");
		}

		this.__recorder = new TNSRecorder();
	  	this.__recorder.debug = true; // set true to enable TNSRecorder console logs for debugging

	  	// need explicit permission from user to allow recording
	  	if isAndroid
	  	{
	  		// ask for recording permission until granted
	  		while (!this.__recorder.hasRecordPermission())
	  		{
	  			this.__recorder.requestRecordPermission();

	  			if this.__recorder.hasRecordPermission()
	  			{
	  				console.log("You gave us permission to record.");
		  		}
		  		else
		  		{
		  			console.log("We need your permission to record audio in order to record audio.");
		  		}
	  		}
	  	}

	  	this.__recorder.start();
	  	
  }

  ngOnInit() {
  }

}
