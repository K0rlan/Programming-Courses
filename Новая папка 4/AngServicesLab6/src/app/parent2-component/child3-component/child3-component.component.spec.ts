import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3ComponentComponent } from './child3-component.component';

describe('Child3ComponentComponent', () => {
  let component: Child3ComponentComponent;
  let fixture: ComponentFixture<Child3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child3ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
