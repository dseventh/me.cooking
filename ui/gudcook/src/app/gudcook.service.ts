import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentData } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {Coach,Seeker, User,Dish,Booking} from './models';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { doesNotThrow } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class GudcookService {
  
  pickRandomArrayItem(input : any[]) {
    let min = 0;
    let max = input.length - 1;
    let index = Math.floor(Math.random() * (max - min + 1)) + min; 
    return input[index];
  }
    
  // Converts firebase user document to application docuement
  docToUser(id : string , docData : DocumentData) : User{    
    let user = new User;
    if (!id)
      return user;
    if (!docData)
      return user;
    if (docData.imageId)      
      user.imageId = docData.imageId;
    if (docData.email)      
      user.email = docData.email;
    if (docData.description)
      user.description = docData.description;
    if (docData.displayName)
      user.displayName = docData.displayName;
    if (docData.joinDate) {
      user.joinDate = new Date(docData.joinDate);
      console.log(`Join date value is ${docData.joinDate}`)
    }
    if (docData.appointmentsDate)
      user.appointmentsDate = docData.appointmentsDate;
    if (docData.appointmentsTime)
      user.appointmentsTime = docData.appointmentsTime;
    if (docData.persona)
      user.persona = docData.persona;
    user.id = id; 


    if ( docData.persona === 'coach') {
      let coach = user as Coach;
      coach.appointments = docData.appointments;
      coach.dishes = docData.dishes;
      coach.cuisines = docData.cuisines; 
      return coach;
    } else 
    if ( docData.persona === 'seeker') {
      let seeker = user as Seeker;
      seeker.appointments = docData.appointments;
      seeker.favorites = docData.dishes;
      return seeker;
    } else 
    return user;       
  }

  setUser( user : User) {
    let item : any = {};
    if (user.email)
      item.email = user.email;
    if (user.description) 
      item.description = user.description;
    if (user.displayName) 
      item.displayName = user.displayName;
    if (user.joinDate)
      item.joinDate = user.joinDate.getTime();
    if (user.persona)
      item.persona = user.persona;
    if (user.imageId)
      item.imageId = user.imageId;
    if (user.appointmentsDate)
      item.appointmentsDate = user.appointmentsDate;
    if (user.appointmentsTime)
      item.appointmentsTime = user.appointmentsTime;
    return this.firestore.collection('users').doc(user.id).set( item,{ merge : true })
  }

  getUser(userid) : Observable<User> {
    if ( !userid)
      return of(null);
    return this.firestore.collection('users').doc(userid)
    .get( { source : 'server'} )
    .pipe( map( document => {      
      return this.docToUser(userid,document.data());
    }))
  }
  
  getDishes() : Observable<Dish[]> {
    return this.firestore.collection('dishes').get().pipe( map ( document => document.docs.map( x => {
      let d = new Dish;
      d.id = x.id;
      d.creator = x.get('creator');
      d.cuisine = x.get('cuisine');
      d.name = x.get('name');
      d.description = x.get('description');
      d.pictureId = x.get('image');
      d.equipment = x.get('equipment');
      d.ingredients = x.get('ingredients');
      d.ratings = x.get('ratings');
      d.duration = x.get('duration');
      return d;
    })))      
  }
  
  getDishesByCreator(creatorId : string) : Observable<Dish[]> {
    return this.firestore.collection('dishes', ref => ref.where( 'creator' ,'==',creatorId)).get().pipe( map ( document => document.docs.map( x => {
      let d = new Dish;
      d.id = x.id;
      d.creator = x.get('creator');
      d.cuisine = x.get('cuisine');
      d.name = x.get('name');
      d.description = x.get('description');
      d.pictureId = x.get('image');
      d.equipment = x.get('equipment');
      d.ingredients = x.get('ingredients');
      d.ratings = x.get('ratings');
      d.duration = x.get('duration');
      return d;
    })))      
  }

  setDish( dish: Dish) {
    let item : any = {};
    if (dish.creator)
      item.creator = dish.creator;
    if (dish.cuisine)
      item.cuisine = dish.cuisine;
    if (dish.description)
      item.description = dish.description;
    if (dish.duration)
      item.duration = dish.duration;
    if (dish.equipment)
      item.equipment = dish.equipment;
    if (dish.ingredients)
      item.ingredients = dish.ingredients;
    if (dish.name) 
      item.name = dish.name;
    if (dish.pictureId)
      item.image = dish.pictureId;
    if (dish.ratings)
      item.ratings = dish.ratings;
    if (dish.story)
      item.story = dish.story;
    if (dish.video)
      item.video = dish.video;
    return this.firestore.collection('dishes').add(item)
      .catch( err => alert('Failed to add dish ${err}'));
  }

  getIngredients(searchString : string) : Observable<string[]> {
    return this.firestore.collection('basics').doc('ingredients').get().pipe( map ( document =>  {
      let result : string[] = document.get('names');
      return result;
    }))
  }

  getCuisines() : Observable<string[]>{
    return this.firestore.collection('basics').doc('cuisines').get().pipe( map ( document =>  {
      let result : string[] = document.get('names');
      return result;
    }))
  }

  getDurations() : Observable<number[]> {
    return of([ 15, 30, 45, 60, 75, 90, 105, 120]);
  }

  getClassTypes() : Observable<string[]>{
    return of([ 'Type-1', 'Type-2', 'Type-3']);
  }
  
  getDishById(id:string) : Observable<Dish> {
    return this.firestore.collection('dishes').doc(id).get().pipe( map ( x => {
      let d = new Dish;
      d.id = x.id;
      d.creator = x.get('creator');
      d.cuisine = x.get('cuisine');
      d.name = x.get('name');
      d.description = x.get('description');
      d.pictureId = x.get('image');
      d.equipment = x.get('equipment');
      d.ingredients = x.get('ingredients');
      d.ratings = x.get('ratings');
      d.duration = x.get('duration');
      return d;
    }))      
  }

  setBooking( booking: Booking) {
    let item : any = {};
    if (booking.personId)
      item.personId = booking.personId;
    if (booking.seekerId)
      item.seekerId = booking.seekerId;
    if (booking.createdDate)
      item.createdDate = booking.createdDate;
    if (booking.bookingDate)
      item.bookingDate = booking.bookingDate;
    if (booking.bookingTime)
      item.bookingTime = booking.bookingTime;
    if (booking.dishId)
      item.dishId = booking.dishId;
    if (booking.status) 
      item.status = booking.status;
    return this.firestore.collection('bookings').add(item)
      .catch( err => alert('Failed to add dish ${err}'));
  }

  getTeachersBooking(teacherId : string) : Observable<Booking[]> {
    return this.firestore.collection('bookings', ref => ref.where( 'personId' ,'==',teacherId)).get().pipe( map ( document => document.docs.map( x => {
      let d = new Booking;
      d.id = x.id;
      d.personId = x.get('personId');
      d.seekerId = x.get('seekerId');
      d.createdDate = x.get('createdDate');
      d.bookingDate = x.get('bookingDate');
      d.bookingTime = x.get('bookingTime');
      d.dishId = x.get('dishId');
      d.status = x.get('status');
      return d;
    })))      
  }

  constructor(private firestore : AngularFirestore, private firebaseAuth: AngularFireAuth) {     
    // Set up a notification so that whenever there is a change is user's auth state, we get notified
  }
}
