import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-edit-profile',
  templateUrl: './student-edit-profile.component.html',
  styleUrls: ['./student-edit-profile.component.css']
})
export class StudentEditProfileComponent implements OnInit {

  @Input() userData: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
