import { Component, OnInit } from '@angular/core';
import { UploadStatus, UploadState } from '../uploader/uploader.component';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  ingredients : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(status : string) {
    console.log(`Added ingredient ${status}`);
    this.ingredients.push(status);
  }

  onRemove(status : string) {
    console.log(`Removed ingredient ${status}`);
    this.ingredients = this.ingredients.filter( x => status != x);
    console.log(`Ingredients ${this.ingredients}`);
  }

}
