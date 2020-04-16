import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerhomeComponent } from './seekerhome.component';

describe('SeekerhomeComponent', () => {
  let component: SeekerhomeComponent;
  let fixture: ComponentFixture<SeekerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
