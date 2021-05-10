import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardPromtComponent } from './card-promt.component';

describe('CardPromtComponent', () => {
  let component: CardPromtComponent;
  let fixture: ComponentFixture<CardPromtComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPromtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPromtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
