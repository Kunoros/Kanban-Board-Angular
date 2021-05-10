import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageBoardsComponent } from './manage-boards.component';

describe('ManageBoardsComponent', () => {
  let component: ManageBoardsComponent;
  let fixture: ComponentFixture<ManageBoardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
