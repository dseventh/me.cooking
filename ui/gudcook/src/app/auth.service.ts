import { Injectable } from '@angular/core';
import {COACHES, SEEKERS} from './mock-data';
import {Coach} from './models';
import { Observable, of } from 'rxjs';

function pickRandomArrayItem(input : any[]) {
  let min = 0;
  let max = input.length - 1;
  let index = Math.floor(Math.random() * (max - min + 1)) + min; 
  return input[index];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getLoggedInUser() : Observable<string> {
    if ( Math.random() >= 0.5) {
      let coach: Coach = pickRandomArrayItem(COACHES);
      return of(coach.email);
    } else {
      let seeker: Coach = pickRandomArrayItem(SEEKERS);
      return of(seeker.email);
    }
  }
  
  constructor() { }
}
