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
    private router : Router) { }
  
  
  ngOnInit(): void {    
  }
  
  validateInput() {
    return true;
  }
  
  signupUser() : void {    
    // if (this.validateInput() )    
    //   this.firebaseAuth.createUserWithEmailAndPassword(this.email,this.password).then( () => this.router.navigate())
  }  
}
