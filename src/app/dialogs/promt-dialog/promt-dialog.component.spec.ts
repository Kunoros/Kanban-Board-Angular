import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromtDialogComponent } from './promt-dialog.component';

describe('PromtDialogComponent', () => {
  let component: PromtDialogComponent;
  let fixture: ComponentFixture<PromtDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromtDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
