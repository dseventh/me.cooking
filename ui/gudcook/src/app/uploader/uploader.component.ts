import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Guid} from 'guid-typescript';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";


export enum UploadState  {
  started = 1,
  inprogress,
  finishIncomplete,
  finishComplete
};

export class UploadStatus {
  public state : UploadState;
  public objectName : string;
  public percentComplete : number = 0;
};

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  @Input()
  directory : string;
  
  @Input()
  prefix : string;

  @Input()
  imageUrl : string;

  @Output() status = new EventEmitter<UploadStatus>();

  uploadStatus : UploadStatus = new UploadStatus;
  constructor(private storage :AngularFireStorage) { }

  ngOnInit(): void {
    console.log(`${this.directory} ${this.prefix} ${this.imageUrl}`)
  }



  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `${this.directory}/${this.prefix}-${Guid.create().toString()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadStatus.state = UploadState.started;
    this.status.next( this.uploadStatus);

    task.percentageChanges().subscribe( n => {
      this.uploadStatus.percentComplete = n;
      this.uploadStatus.state = UploadState.inprogress; 
      this.status.next( this.uploadStatus);
    })

    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            if (url) {
              this.uploadStatus.state = UploadState.finishComplete;
              this.uploadStatus.objectName = filePath;
              this.status.next( this.uploadStatus);
            }
          });
        })
      )
      .subscribe( );
  }
}
