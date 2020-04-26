import { Component, OnInit, Input } from '@angular/core';
import { BannerData, Dish, FilterData , User, Coach} from '../models';
import { GudcookService } from '../gudcook.service';

@Component({
  selector: 'app-dish-editor',
  templateUrl: './dish-editor.component.html',
  styleUrls: ['./dish-editor.component.css']
})
export class DishEditorComponent implements OnInit {
  @Input() 
  coach : Coach;
  dishes : Dish[];

  constructor(private gudcookService : GudcookService) { }

  ngOnInit(): void {
    this.gudcookService.getDishesByCreator(this.coach.id).subscribe( dishes => this.dishes = dishes );
  }  
}
