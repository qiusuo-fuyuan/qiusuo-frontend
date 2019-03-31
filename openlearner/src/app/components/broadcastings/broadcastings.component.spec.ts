import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastingsComponent } from './broadcastings.component';

describe('BroadcastingsComponent', () => {
  let component: BroadcastingsComponent;
  let fixture: ComponentFixture<BroadcastingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
