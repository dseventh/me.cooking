import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GudcookService } from '../gudcook.service';
import { Dish, Appointment } from '../models';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  dish : Dish;
  appointments : Appointment[];
  selected : boolean[];

  constructor( 
    private route: ActivatedRoute,
    private gudcookService: GudcookService 
  ) { }

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
