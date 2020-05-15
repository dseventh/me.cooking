import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { GudcookService } from '../gudcook.service';
import { Dish, Appointment, Booking } from '../models';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastService } from '../toast-service';

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
  // minDate : {year: number, month: number, day: number};
  minDate : NgbDateStruct;
  scheduledTimes: any;
  bookingForm: FormGroup;
  teacherId: string = '';
  maxDate: NgbDateStruct;
  message:string = null;
  booking: Booking = new Booking;

  constructor( private route: ActivatedRoute,
    private gudcookService: GudcookService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router : Router,
    private firebaseAuth: AngularFireAuth,
    private calendar: NgbCalendar
  ) {
      this.teacherAvlDate = calendar.getToday();
      this.minDate = calendar.getToday();
    }

  ngOnInit(): void {
    if (!this.route.snapshot.paramMap.get('id')) {
      this.router.navigate(['/home']);
    }
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.gudcookService.getDishById(params.get('id')))
    ).subscribe( d => {
      if (d.creator) {
        this.dish = d;
        this.teacherId = d.creator;
        this.gudcookService.getUser(d.creator).subscribe( teacherData => {
          this.getTeacherAppointmentSlot(teacherData);
        });
      }else{
        this.router.navigate(['/home']);
      } 
    });  
    
    this.bookingForm = this.formBuilder.group({
      bookingDate: [''],
      scheduleTime: [''],
    });
  }

  getTeacherAppointmentSlot(teacherData:any){
    let todayNewDate:any = new Date();
    if (teacherData.appointmentsDate && teacherData.appointmentsDate.length > 0) {
      if(teacherData.appointmentsDate[0] > todayNewDate.getTime()){
        let getNewMinDate:any = new Date(teacherData.appointmentsDate[0]);
        this.minDate = {
          year: getNewMinDate.getFullYear(),
          month: getNewMinDate.getMonth() + 1,
          day: getNewMinDate.getDate()
        }
      }

      if(teacherData.appointmentsDate[teacherData.appointmentsDate.length -1] > todayNewDate.getTime()){
        let getNewMaxDate:any = new Date(teacherData.appointmentsDate[teacherData.appointmentsDate.length -1]);
        this.maxDate = {
          year: getNewMaxDate.getFullYear(),
          month: getNewMaxDate.getMonth() + 1,
          day: getNewMaxDate.getDate()
        }
      }
    }
    let appointmentsTime = teacherData.appointmentsTime;
    let availableTimeArr = [];
    appointmentsTime.forEach((avlTime:any) => {
      availableTimeArr.push({isBooked: false, avltime:avlTime, timeFormat:this.formatTime(avlTime)});
    });
    this.scheduledTimes = availableTimeArr;
    this.dateWiseAvlTimeSlot(todayNewDate);
  }

  formatTime(time){
    const H = +time.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = (H < 12 || H === 24) ? " AM" : " PM";
    return h + time.substr(2, 3) + ampm;
  }

  dateWiseAvlTimeSlot(selDate:any){
    console.log(selDate);
  }

  onDateSelect(selDate){
    let userSelDate = new Date(selDate.year+'-'+selDate.month+'-'+selDate.day);
    this.dateWiseAvlTimeSlot(userSelDate);
  }

  bookingSubmit = (value, errorTpl, successTpl) => {
    let dishId = this.route.snapshot.paramMap.get('id');
    if (!value.bookingDate) {
      this.message = 'Please select a booking date.';
      this.toastService.show(errorTpl, { classname: 'bg-danger text-light', delay: 4000 });
    } else if (!value.scheduleTime) {
      this.message = 'Please select a time slot.';
      this.toastService.show(errorTpl, { classname: 'bg-danger text-light', delay: 4000 });
    } else {
      this.firebaseAuth.authState.subscribe((user:any) => {
        if(user.uid){
          this.booking.bookingDate = new Date(value.bookingDate.year+'-'+value.bookingDate.month+'-'+value.bookingDate.day).getTime();
          this.booking.bookingTime = value.scheduleTime;
          this.booking.personId = this.teacherId;
          this.booking.seekerId = user.uid;
          this.booking.createdDate = new Date().getTime();
          this.booking.dishId = dishId;
          this.booking.status = 'pending';

          this.gudcookService.setBooking(this.booking).then( () => {
            this.message = 'You have successfully booked.';
            this.toastService.show(successTpl, { classname: 'bg-success text-light', delay: 4000 });
            this.router.navigate(['/editprofile']);
          });
        }else{
          this.message = 'Please login first.';
          this.toastService.show(errorTpl, { classname: 'bg-danger text-light', delay: 4000 });
        }
      });
    }
  }

}
