import { Component, OnInit } from '@angular/core';
import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";
import * as fs from "tns-core-modules/file-system";

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

  public onCreateFile() { 
    console.log("ENTERED");
    // create folders, files, and file content
      let documents = knownFolders.documents();

      console.log(knownFolders.currentApp() + "is the known folders");
      console.log(knownFolders.documents() + "is the known folders");
      console.log(knownFolders.temp() + "is the known folders");

      this.folder = documents.getFolder(this.folderName || "testFolder");
      this.file = this.folder.getFile((this.fileName || "testFile") + ".txt");

      console.log("REACH?");

      this.file.writeText(this.fileTextContent || "some random content")
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
            console.log(this.writtenContent + "!!!!");
        }).catch(err => {
            console.log(err.stack);
      });
  }
}