import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArafatakbarComponent } from './arafatakbar.component';

describe('ArafatakbarComponent', () => {
  let component: ArafatakbarComponent;
  let fixture: ComponentFixture<ArafatakbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArafatakbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArafatakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
