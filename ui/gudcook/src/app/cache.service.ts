import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from './models';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  user : User ;
  constructor() { }
  setUser( u : User) {
    console.log('Setting user')
    this.user = u;
  }

  getUser() : Observable<User> {
    console.log('getting user')
    return of(this.user);
  }
}
