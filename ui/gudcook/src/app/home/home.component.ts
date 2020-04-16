import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../models';
import { AuthService } from '../auth.service';
import { GudcookService } from '../gudcook.service';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  constructor( private authService : AuthService, 
    private gudcookService : GudcookService,
    private cacheService : CacheService,
    private router : Router) { }

  ngOnInit() {    
    this.authService.getLoggedInUser()
      .subscribe(x=>{
        this.gudcookService.getUser(x).subscribe( u => {
          this.cacheService.setUser(u);
          if (u.persona == 'coach')
            this.router.navigate(['coach']);
          if (u.persona == 'seeker')
            this.router.navigate(['seeker']);
        })
      })        
  }
}
