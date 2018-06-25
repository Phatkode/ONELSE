import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarpostComponent } from './calendarpost.component';

describe('CalendarpostComponent', () => {
  let component: CalendarpostComponent;
  let fixture: ComponentFixture<CalendarpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
