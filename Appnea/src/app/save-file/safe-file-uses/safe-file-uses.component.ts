import { Component, OnInit } from '@angular/core';
import { SaveFileComponent } from '../save-file.component';

@Component({
  selector: 'ns-safe-file-uses',
  templateUrl: './safe-file-uses.component.html',
  styleUrls: ['./safe-file-uses.component.css'],
  moduleId: module.id,
})
export class SafeFileUsesComponent implements OnInit {

  public fileContent : string;
  
  constructor() {
  }

  ngOnInit() {

    this.fileContent = "x.fileTextContent";
  }
}