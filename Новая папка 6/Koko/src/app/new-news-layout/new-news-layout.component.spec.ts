import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNewsLayoutComponent } from './new-news-layout.component';

describe('NewNewsLayoutComponent', () => {
  let component: NewNewsLayoutComponent;
  let fixture: ComponentFixture<NewNewsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNewsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNewsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
