import { Component, OnInit,Input } from '@angular/core';
import { BannerData } from '../models';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  @Input()  bannerData : BannerData;
  ngOnInit(): void {
  }

}
