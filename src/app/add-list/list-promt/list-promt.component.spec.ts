import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListPromtComponent } from './list-promt.component';

describe('ListPromtComponent', () => {
  let component: ListPromtComponent;
  let fixture: ComponentFixture<ListPromtComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPromtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPromtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
