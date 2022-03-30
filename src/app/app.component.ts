import { Component } from '@angular/core';
import { FileInterface } from './fileInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  isFileUploading : boolean = false;

  file: FileInterface | null = null;

  uploadImage() {
    console.log("This file is uploading......");
    this.isFileUploading = true;

  }

  onImageDropped(file: FileInterface) {
    this.file = file;
    console.log(file);
    
  }

  
}
