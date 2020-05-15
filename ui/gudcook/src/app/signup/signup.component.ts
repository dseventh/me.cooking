import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GudcookService } from '../gudcook.service';
import { User, Coach } from '../models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user : string;
  email : string;
  password : string;
  retypePassword : string;

  constructor(private firebaseAuth: AngularFireAuth, 
    private gudcookService : GudcookService,
    private router : Router) { }
  
  
  ngOnInit(): void {    
    this.firebaseAuth.currentUser.then( u => {
      if (u) {
        this.router.navigate(['editprofile']);
      }
    })
  }
  
  validateInput() {
    if (! ( this.user && this.user.length) ) 
      return false;
    if (! ( this.password && this.password.length) )
      return false;
    if (! ( this.retypePassword && this.retypePassword.length) )
      return false;
    
    if ( this.password != this.retypePassword)
      return false;

    if (! this.email)
      return false;
    if (! ( this.email && this.email.length) )
      return false;
    return true;
  }
  
  signupUser() : void {    
    if (this.validateInput() )    
      this.firebaseAuth.createUserWithEmailAndPassword(this.email,this.password)
      .then( 
        (user) => {
          let u : User = new User;
          u.id = user.user.uid;
          u.email = user.user.email;
          u.displayName = this.user;
          return this.gudcookService.setUser(u);
        }
      )
      .then( () => {
        this.router.navigate(['firstlogin']);
      })
    else {
      alert('Input validation error')
    }
  }  
}
