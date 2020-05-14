import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GudcookService } from '../gudcook.service';
import { Dish, Appointment } from '../models';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dish : Dish;
  appointments : Appointment[];
  selected : boolean[];
  teacherAvlDate: NgbDateStruct;
  minDate : {year: number, month: number, day: number};
  isDisplayTimeSlot:boolean = false;

  constructor( private route: ActivatedRoute,
    private gudcookService: GudcookService,
    private calendar: NgbCalendar) {
      const current = new Date();
      this.teacherAvlDate = calendar.getToday();

      this.minDate = {
        year: current.getFullYear(),
        month: current.getMonth() + 1,
        day: current.getDate()
      };
    }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.gudcookService.getDishById(params.get('id')))
    ).subscribe( d => { 
      this.dish = d;
      // console.log('d', d)
      // this.gudcookService.getAppointmentsForDish(d.id).subscribe( x => {
      //   this.appointments = x;
      //   this.selected = x.map( x => false);
      // } );
    });    
  }

  onDateSelect(selDate:any){
    this.isDisplayTimeSlot = true;
    console.log('selDate', selDate)
  }

}
