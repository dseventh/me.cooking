import { Component, OnInit } from '@angular/core';
import { UploadStatus, UploadState } from '../uploader/uploader.component';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  currentStatus : UploadStatus ;
  constructor() { }

  ngOnInit(): void {
  }

  onStatusChange(status : UploadStatus) {
    this.currentStatus = status;
  }
}
