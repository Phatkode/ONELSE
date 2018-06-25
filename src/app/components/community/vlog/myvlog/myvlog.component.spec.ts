import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvlogComponent } from './myvlog.component';

describe('MyvlogComponent', () => {
  let component: MyvlogComponent;
  let fixture: ComponentFixture<MyvlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
