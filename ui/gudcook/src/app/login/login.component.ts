import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs/operators'
import * as firebase from 'firebase/app';
import { GudcookService } from '../gudcook.service';
import { CacheService } from '../cache.service';
import { of,from } from 'rxjs';
import { User } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private gudcookService : GudcookService, 
    private firebaseAuth: AngularFireAuth, 
    private router : Router) { }
  userName : string;
  password : string;
  message: string = "";

  ngOnInit(): void {    
    this.firebaseAuth.authState
    .pipe( flatMap (user =>  { 
      let x : User = new User;
      if (user) {
          x.id = user.uid;
          x.email = user.email;
          x.displayName = user.displayName;
          return from(this.gudcookService.setUser(x).then( () => x));          
        }
        else 
          return of(x);
      })
    )
    .pipe( flatMap( user => {
        return this.gudcookService.getUser(user.id);
    }))
    .subscribe(u=>{
      if (u) {
        console.log(u);
        if (u.persona === 'seeker')
          this.router.navigate(['/seeker']);
        else
        if (u.persona === 'coach')
          this.router.navigate(['/coach']);  
        else 
          this.router.navigate(['/firstlogin']);
      }
    })
  }

  loginWithGoogle() {
    this.firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )  
  }

  setMessage(m) {
    this.message = m;
  }

  loginWithPassword() {
    this.setMessage("");
    return this.firebaseAuth.signInWithEmailAndPassword(this.userName,this.password).catch( err => {
      this.setMessage("Login failed");
    })  
  }

}
