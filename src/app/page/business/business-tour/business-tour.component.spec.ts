import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTourComponent } from './business-tour.component';

describe('BusinessTourComponent', () => {
  let component: BusinessTourComponent;
  let fixture: ComponentFixture<BusinessTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
