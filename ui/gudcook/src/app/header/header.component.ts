import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn : boolean;
  constructor(private firebaseAuth: AngularFireAuth, private router : Router) { }

  ngOnInit() {
    this.firebaseAuth.authState.subscribe( u => this.loggedIn = u != null)
  }

  signIn() {
    this.router.navigate(['signin']);
  }

  signOut() {
    this.firebaseAuth.signOut().then( () => {
      this.loggedIn = false;
      this.router.navigate(['home'])
    });
  }
}
