import { Component, OnInit, Input } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastService } from '../toast-service';
import { GudcookService } from '../gudcook.service';

interface Pagination {
  avlDate: number;
}

@Component({
  selector: 'app-teacher-edit-profile',
  templateUrl: './teacher-edit-profile.component.html',
  styleUrls: ['./teacher-edit-profile.component.css']
})
export class TeacherEditProfileComponent implements OnInit {
  @Input() userData: string[];

  public appointmentsEdit:boolean = false;
  public selectedDate:any;
  public minDate : {year: number, month: number, day: number};
  public maxDate : {year: number, month: number, day: number};
  public errorMsg:string = '';
  public successMsg:string = '';

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  timeSlot:any = [];
  selectedItemsList:any = [];
  teacherAppointmentList:Pagination[];
  public teacherAvlTime:string = null;

  // pagination 
  public page = 1;
  public pageSize = 5;
  public collectionSize = 0;
  
  constructor(
    private calendar: NgbCalendar,
    private toastService: ToastService,
    private gudcookService : GudcookService,
    private router : Router
  ) {
   
    this.minDate = calendar.getToday();
    this.maxDate = calendar.getNext(calendar.getToday(), 'd', 30);
  }

  ngOnInit(): void {
    this.getAllAppointmentsList();
  }

  getAllAppointmentsList(){
    this.fromDate = this.calendar.getToday();
    this.timeSlot =   this.generateTimeSlot("60", "9:00:00");
    // Get user appointments list
    let teacherData:any = this.userData;
    if (teacherData.id && teacherData.id !='') {
      this.gudcookService.getUser(teacherData.id).subscribe((data:any) => {
        let teacherAppData = [];
        let teacherAppTime = [];
        data.appointmentsDate.forEach((element:any) => {
          teacherAppData.push({avlDate:element})
        }); 

        data.appointmentsTime.forEach((element:any) => {
          teacherAppTime.push(this.formatTime(element))
        }); 
        this.teacherAppointmentList = teacherAppData;
        this.collectionSize = data.appointmentsDate.length;
        this.teacherAvlTime = teacherAppTime.toString();
      });      
    }
  }

  generateTimeSlot(step, yourTime){
    // interval in minutes
    const slotArray = [];
    const startMinutes = yourTime ? this.howManyMinutesPassed(yourTime) : 0;
    const parsedSlotSize = parseInt(step.toString(), 10);
    for (let i = startMinutes; i <= 24 * 60; i += parsedSlotSize) {
      let covertMin = this.convertMinutesToTimeFormat(i);
      slotArray.push({
        time: covertMin,
        timeformat: this.formatTime(covertMin),
        minutes: i,
        isChecked:false
      });
    }
    return [...slotArray];
  }

  howManyMinutesPassed(time) {
    const [hour, minutes] = time.split(':').map((value) => parseInt(value, 10));
    return hour * 60 + minutes;
  }

  public convertMinutesToTimeFormat(mins) {
    let h: string | number = Math.floor(mins / 60);
    let m: string | number = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}:00`;
  }

  formatTime(time){
    const H = +time.substr(0, 2);
    const h = H % 12 || 12;
    const ampm = (H < 12 || H === 24) ? " AM" : " PM";
    return h + time.substr(2, 3) + ampm;
  }

  schedulingCalendar() {
    this.appointmentsEdit = true;
  }

  cancelAppointments() {
    this.appointmentsEdit = false;
    this.toDate = null;
    this.selectedItemsList = [];
  }

  saveAppointments(errorTpl, successTpl) {
    if (!this.fromDate || !this.toDate) {
      this.successMsg = '';
      this.errorMsg = 'Please select appointments date from calendar.';
    } else if (this.selectedItemsList.length === 0) {
      this.successMsg = '';
      this.errorMsg = 'Please select available time from list.';
    } else {
      const startDate:any = new Date(this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day);
      const endDate:any = new Date(this.toDate.year+'-'+this.toDate.month+'-'+this.toDate.day);
      const MS_PER_DAY: number = 1000*60*60*24;
      const start: number = startDate.getTime();
      const end: number = endDate.getTime();
      const daysBetweenDates: number = Math.ceil((end - start) / MS_PER_DAY);
      // The days array will contain a Date object for each day between dates
      const totalDaysArr:Number[] = Array.from(new Array(daysBetweenDates + 1), 
        (v, i) => new Date(start + (i * MS_PER_DAY)).getTime());

      // Get time slot
      let userSelTimeSlot:any = [];
      this.selectedItemsList.forEach((value:any, index:number) => {
        if (value.isChecked) {
          userSelTimeSlot.push(value.time);
        }
      });

      let teacherData:any = this.userData;
      teacherData.appointmentsDate = totalDaysArr;
      teacherData.appointmentsTime = userSelTimeSlot;
      if (teacherData.id && teacherData.id !='') {
        this.gudcookService.setUser(teacherData).then( u => {
          this.toDate = null;
          this.selectedItemsList = [];
          this.getAllAppointmentsList();
          this.errorMsg = '';
          this.successMsg = 'You have successfully setup the schedule.'; 
          this.appointmentsEdit = false;
          this.toastService.show(successTpl, { classname: 'bg-success text-light', delay: 4000 });  
        }).catch( error => {
          console.log('error', error);
          this.errorMsg = error;
          this.successMsg = ''; 
        })
      }else{
        this.successMsg = '';
        this.errorMsg = 'Somethings wrong! Try again later.';
      }
    }

    if (this.errorMsg !='') {
      this.toastService.show(errorTpl, { classname: 'bg-danger text-light', delay: 4000 });
    }
  }

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.timeSlot.filter((value:any, index:number) => {
      return value.isChecked
    });
  }

  onDateSelection(selDate:NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = selDate;
    } else if (this.fromDate && !this.toDate && selDate.after(this.fromDate)) {
      this.toDate = selDate;
    } else {
      this.toDate = null;
      this.fromDate = selDate;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  get paginationData(): Pagination[] {
    return  this.teacherAppointmentList
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
