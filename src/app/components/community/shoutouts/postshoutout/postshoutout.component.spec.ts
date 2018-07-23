import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbulletinComponent } from './postbulletin.component';

describe('PostbulletinComponent', () => {
  let component: PostbulletinComponent;
  let fixture: ComponentFixture<PostbulletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbulletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
