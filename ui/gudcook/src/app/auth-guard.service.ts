import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _firebaseAuth: AngularFireAuth, public router : Router) { }

  canActivate(): Observable<boolean> {    
    return this._firebaseAuth.authState.pipe( map(user => {
      if (user == null )
        this.router.navigate(['/login'])
      return user != null;
    }))
  }
}
