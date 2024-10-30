import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessServiceComponent } from './business-service.component';

describe('BusinessServiceComponent', () => {
  let component: BusinessServiceComponent;
  let fixture: ComponentFixture<BusinessServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
