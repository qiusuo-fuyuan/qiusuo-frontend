import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicquestionsComponent } from './publicquestions.component';

describe('PublicquestionsComponent', () => {
  let component: PublicquestionsComponent;
  let fixture: ComponentFixture<PublicquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
