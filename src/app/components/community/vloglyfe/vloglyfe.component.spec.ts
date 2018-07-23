import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlogLyfeComponent } from './vloglyfe.component';

describe('VlogLyfeComponent', () => {
  let component: VlogLyfeComponent;
  let fixture: ComponentFixture<VlogLyfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlogLyfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlogLyfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
