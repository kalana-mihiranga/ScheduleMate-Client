import { Component } from '@angular/core';
import { FooterComponent } from '../../../common/component/footer/footer.component';
import { InsideFooterComponent } from '../../../common/component/inside-footer/inside-footer.component';
import { BusinessNavbarComponent } from '../../../common/component/business-navbar/business-navbar.component';

@Component({
  selector: 'app-business-landing',
  standalone: true,
  imports: [InsideFooterComponent, BusinessNavbarComponent],
  templateUrl: './business-landing.component.html',
  styleUrl: './business-landing.component.scss'
})
export class BusinessLandingComponent {

}
