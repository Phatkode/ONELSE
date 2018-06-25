import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvlogpreviewComponent } from './myvlogpreview.component';

describe('MyvlogpreviewComponent', () => {
  let component: MyvlogpreviewComponent;
  let fixture: ComponentFixture<MyvlogpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvlogpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvlogpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
