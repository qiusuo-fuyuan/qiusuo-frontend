import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardedquestionsComponent } from './rewardedquestions.component';

describe('RewardedquestionsComponent', () => {
  let component: RewardedquestionsComponent;
  let fixture: ComponentFixture<RewardedquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardedquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardedquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
