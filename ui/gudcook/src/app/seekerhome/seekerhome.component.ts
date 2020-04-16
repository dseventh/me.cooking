import { Component, OnInit } from '@angular/core';
import { Seeker,Duration, CuisineSearchParams } from '../models';
import { CacheService } from '../cache.service';
import { Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { GudcookService } from '../gudcook.service';

@Component({
  selector: 'app-seekerhome',
  templateUrl: './seekerhome.component.html',
  styleUrls: ['./seekerhome.component.css']
})
export class SeekerhomeComponent implements OnInit {
  seeker : Seeker;
  cuisines : string[];
  durations : Duration[] = [
    { min : 0, max : 15 },
    { min : 15, max : 30},
    { min : 30, max : 45},
    { min : 45, max : 60},
    { min : 60, max : 75},
    { min : 75, max : 90},
    { min : 90, max : 105},
    { min : 105, max : 120 },
  ];

  searchParams : CuisineSearchParams ;

  constructor( private cacheService: CacheService, 
    private router : Router,
    private calendar :NgbCalendar,
    private gudcookService: GudcookService) { 
      this.searchParams = new CuisineSearchParams;
      this.searchParams.date = calendar.getToday();
      this.searchParams.cuisine = 'any';
      this.searchParams.duration = { min : 0, max : 120};
    }

  ngOnInit() {
    this.cacheService.getUser().subscribe(user => {
      if (!user)
        this.router.navigate(['home'])  
      else {
        this.gudcookService.getCuisines().subscribe( c => {
          console.log('Initializing seeker')
          this.cuisines = c;
          this.seeker = user as Seeker;      
          this.searchParams.date = this.calendar.getToday();
        });
      }
    })
  }
}
