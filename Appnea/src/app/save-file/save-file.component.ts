import { Component, OnInit } from '@angular/core';
import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
import * as fs from "tns-core-modules/file-system";
import { XYZData } from '../accelerometer/acceleromterClasses';

@Component({
  selector: 'ns-save-file',
  templateUrl: './save-file.component.html',
  styleUrls: ['./save-file.component.css'],
  moduleId: module.id,
})
export class SaveFileComponent {

  // main source: https://docs.nativescript.org/angular/ng-framework-modules/file-system
  public folderName: string;
  public fileName: string;
  public fileTextContent: string;

  public successMessage: string;
  public writtenContent: string;
  public isItemVisible: boolean = false;

  public file: File;
  public folder: Folder;

  public onCreateFile(points : XYZData[]) { 
    console.log("ENTERED");
    
    // gets the Documents folder available for the current application
    // folder is private for the application and not accessible from Users/External apps
    let documents = knownFolders.documents();

    console.log((knownFolders.currentApp()) + "is the known folders");
    console.log(knownFolders.documents() + "is the known folders");
    console.log(knownFolders.temp() + "is the known folders");

    // creates a Folder entity with the specified name within this Folder
    this.folderName = "testFolder";
    this.folder = documents.getFolder( this.folderName );

    // creates a File entity with the specified name within ^ Folder
    this.fileName = "testFile.txt"
    this.file = this.folder.getFile(this.fileName);

    console.log("REACH?" + this.fileTextContent + ";;;;");

    this.fileTextContent = JSON.stringify(points);

    console.log("CHANGE?" + this.fileTextContent + ";;;;");

    // writes the provided string to the file
    this.file.writeText(this.fileTextContent)
        .then(result => {
            this.file.readText()
                .then(res => {
                  console.log("INSIDE");
                 
                  this.successMessage = "Successfully saved in " + this.file.path;
                  this.writtenContent = res;
                  this.isItemVisible = true;
                  
                });
        }).catch(err => {
            console.log(err);
    });

    console.log("DONE");

    // check if file exists
    this.file.readText()
      .then(res => {
          this.writtenContent = res;
          console.log("!!!!" + this.writtenContent);
      }).catch(err => {
          console.log(err.stack);
    });
  }
}