import { Injectable } from '@angular/core';
import { COACHES,SEEKERS, CUISINES,DISHES, APTS} from './mock-data';
import {Coach,User,Dish,Appointment} from './models';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GudcookService {
  getUser(email : string) : Observable<User> {
    if ( Math.random() >= 0.5) {
      return of(COACHES.find( item => item.email == email));
    } else {
      return of(SEEKERS.find( item => item.email == email));
    }
  }
  
  getCuisines() : Observable<string[]>{
    return of(CUISINES);
  }

  getDishById(id:string) : Observable<Dish> {
    return of(DISHES.find( item => item.id === id));
  }

  getAppointmentsForDish(id:string) : Observable<Appointment[]> {
    return of(APTS.slice(0,5));
  }
  constructor() { }
}
