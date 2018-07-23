import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaygeComponent } from './userpayge.component';

describe('UserComponent', () => {
  let component: UserPaygeComponent;
  let fixture: ComponentFixture<UserPaygeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaygeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaygeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
