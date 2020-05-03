import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GudcookService } from '../gudcook.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  constructor() { }

  
  current : string;
  
  @Input()
  itemType: string;

  @Input()  
  display : string[];

  @Output()
  added = new EventEmitter<string>();

  @Output()
  removed = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onAdd() {
    if (this.current) {
      this.added.emit(this.current);
      console.log(`${this.display}`)
      this.current = null;
    }
  }

  onRemove(item) {
    this.removed.emit(item);
    console.log(`${this.display}`)
  }
}
