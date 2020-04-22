import { Input, Component, OnInit } from '@angular/core';
import { BannerData, Dish, FilterData , User} from '../models';
import { GudcookService } from '../gudcook.service';
import {forkJoin} from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-browser',
  templateUrl: './dish-browser.component.html',
  styleUrls: ['./dish-browser.component.css']
})
export class DishBrowserComponent implements OnInit {
  dishView : Dish[];
  dishes : Dish[];
  durations : number [] ;
  classTypes : string[];
  cuisines : string[];
  filters : FilterData[] ;
  coaches : User [];

  bannerData : BannerData = {
    buttonRoute : null,
    buttonText : null,
    content : 'We have over 100 chefs providing a wide range of dishes to choose from',
    heading : 'Browse from our dish library'
  }

  constructor( private gudcookService : GudcookService) { 
    this.filters = [
      { title : 'Food experience',  selected : "All", options : null, unit : ''},
      { title : 'Duration', selected : 'All' ,  options : null, unit : 'Minutes'},
      { title : 'Class Type', selected : "All",  options : null, unit : ''},
    ]  
  }

  ngOnInit(): void {  
    this.gudcookService.getDishes().pipe( flatMap( dishes => {
      this.dishView = dishes;
      this.dishes = dishes;
      return forkJoin(this.dishes.map( dish => this.gudcookService.getUser(dish.creator)))
    })).subscribe( users => this.coaches = users);


    this.gudcookService.getCuisines().subscribe( x => {
      this.cuisines = [ 'All'].concat(x);
      this.filters[0].options = this.cuisines;
    });

    this.gudcookService.getClassTypes().subscribe( x => {
      this.classTypes = [ 'All'].concat(x);
      this.filters[2].options = this.classTypes;
    });

    this.gudcookService.getDurations().subscribe( x => {
      this.durations = x;
      this.filters[1].options = this.durations;
    });
  }  

  applyFilter() {
    console.log(`Applying filter ${this.filters[0].selected}  ${this.filters[1].selected}`);
    this.dishView = this.dishes
      .filter( x=> this.filters[0].selected === 'All' || this.filters[0].selected === x.cuisine)
      .filter( x => this.filters[1].selected == x.duration || this.filters[1].selected == 'All')      
  }

  getUserName(userId :string) {
    if (this.coaches)
      return this.coaches.find( x=>x.id == userId).displayName;
    else 
      return '';
  }
}
