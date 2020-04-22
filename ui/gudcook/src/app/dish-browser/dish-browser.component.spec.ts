import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishBrowserComponent } from './dish-browser.component';

describe('DishBrowserComponent', () => {
  let component: DishBrowserComponent;
  let fixture: ComponentFixture<DishBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
