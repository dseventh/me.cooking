import { Component, OnInit } from '@angular/core';
import { Coach } from '../models';
import { CacheService } from '../cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coachhome',
  templateUrl: './coachhome.component.html',
  styleUrls: ['./coachhome.component.css']
})
export class CoachhomeComponent implements OnInit {
  coach : Coach;
  constructor( private cacheService: CacheService, private router : Router) { }

  ngOnInit() {
    this.cacheService.getUser().subscribe(user => {
      this.coach = user as Coach;      
      if (!user)
        this.router.navigate(['home'])
    })
  }
}
