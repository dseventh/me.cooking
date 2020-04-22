import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GudcookService } from '../gudcook.service';
import { Dish, Appointment } from '../models';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dish : Dish;
  appointments : Appointment[];
  selected : boolean[];

  constructor(  private route: ActivatedRoute,
    private gudcookService: GudcookService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.gudcookService.getDishById(params.get('id')))
    ).subscribe( d => { 
      this.dish = d;
      // this.gudcookService.getAppointmentsForDish(d.id).subscribe( x => {
      //   this.appointments = x;
      //   this.selected = x.map( x => false);
      // } );
    });    
  }

}
