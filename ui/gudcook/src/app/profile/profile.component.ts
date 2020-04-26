import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GudcookService } from '../gudcook.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(  private gudcookService : GudcookService, 
    private firebaseAuth: AngularFireAuth ,
    private router : Router) { }

  ngOnInit(): void {
    //TODO put flatmap here
    this.firebaseAuth.currentUser.then( u => {
      if (u) {
        this.gudcookService.getUser(u.uid).subscribe( user => {          
          if (user.persona)
            this.router.navigate([user.persona])
          else 
            this.router.navigate(['home']);
        })
      }
    });    
  }
}
