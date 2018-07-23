import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VloggerpagesComponent } from './vloggerpages.component';

describe('VloggerpagesComponent', () => {
  let component: VloggerpagesComponent;
  let fixture: ComponentFixture<VloggerpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VloggerpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VloggerpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
