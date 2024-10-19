import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPackageAddComponent } from './business-package-add.component';

describe('BusinessPackageAddComponent', () => {
  let component: BusinessPackageAddComponent;
  let fixture: ComponentFixture<BusinessPackageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPackageAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPackageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
