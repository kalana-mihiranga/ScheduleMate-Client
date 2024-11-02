import { Component, inject, TemplateRef } from '@angular/core';
import { InsideFooterComponent } from '../../../common/component/inside-footer/inside-footer.component';
import { BusinessNavbarComponent } from '../../../common/component/business-navbar/business-navbar.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbModal,
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { BusinessService } from '../business.service';
import { ADD_PACKAGE_MODEL } from '../../../utils/model/businessModel';
import { ToastService } from '../../../shared/toast.service';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-business-package',
  standalone: true,
  imports: [
    InsideFooterComponent,
    BusinessNavbarComponent,
    CommonModule,
    DecimalPipe,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
  ],
  templateUrl: './business-package.component.html',
  styleUrl: './business-package.component.scss',
})
export class BusinessPackageComponent {

  private modalService = inject(NgbModal);

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  countries: any[] = [];

  constructor(private businessService: BusinessService, private toastService: ToastService, private commonService: CommonService) {
  }

  ngOnInit() {
    this.refreshPackages();
    this.loadLocalStorageData();
  }

  businessId: number | null = null;

  loadLocalStorageData() {
    const idFromStorage = this.commonService.getItem("ID");
    if (idFromStorage) {
      this.businessId = parseInt(idFromStorage, 10);
      this.getBPackages();
    }
  }

  packageList: any[] = [];

  getBPackages() {
    if (this.businessId !== null) {
      this.businessService.getBusinessPackages(this.businessId, this.page-1, this.pageSize).subscribe(
        (response) => {
  
          this.collectionSize = response.body.totalElements;
          this.packageList = response.body.content;
  
        },
        (error) => {
          console.log('Error of fetching business packages : ', error);
        }
      );
    }
  }

  refreshPackages() {
    this.getBPackages();
  }

  packageName: string = "";
  duration: string = "";
  maximumCount: string = "";
  price: string = "";

  packageAddPayload: ADD_PACKAGE_MODEL = {
    name: "",
    duration: "",
    maximumCount: "",
    price: "",
    businessId: null
  }

  submitPackage() {

    this.packageAddPayload = {
      name: this.packageName,
      duration: this.duration,
      maximumCount: this.maximumCount,
      price: this.price,
      businessId: this.businessId
    }

    this.businessService.submitBusinessPackage(this.packageAddPayload).subscribe(
      (response) => {
        if (response.status == 200) {
          this.clearPackageForm();
          this.showToastMessage(
            'Success!',
            ['Successfully Added Package.'],
            'White',
            '#21db21',
            'bi bi-check-circle-fill'
          );
          this.getBPackages();
        } else {
          this.showToastMessage(
            'Warning!',
            ['Internal Server Error.'],
            'White',
            '#FCC200',
            'bi bi-exclamation-triangle-fill'
          );
        }
      },
      (error) => {
        this.showToastMessage(
          'Warning!',
          ['Internal Server Error.'],
          'White',
          '#FCC200',
          'bi bi-exclamation-triangle-fill'
        );
        console.log('error : ', error);
      }
    );

  }

  clearPackageForm() {
    this.packageName = "";
    this.duration = "";
    this.maximumCount = "";
    this.price = "";
  }

  openAddPackage(addPackage: TemplateRef<any>) {
    this.modalService.open(addPackage, { centered: true, size: 'lg' });
  }

  showToastMessage(
    header: string,
    body: string[],
    color: string,
    backgroundColor: string,
    icon: string
  ) {
    this.toastService.show(header, body, color, backgroundColor, icon);
  }

}
