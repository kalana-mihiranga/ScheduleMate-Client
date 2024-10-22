import { Component } from '@angular/core';
import { BusinessNavbarComponent } from '../../../common/component/business-navbar/business-navbar.component';
import { InsideFooterComponent } from '../../../common/component/inside-footer/inside-footer.component';
import { ClientNavbarComponent } from '../../../common/component/client-navbar/client-navbar.component';

@Component({
  selector: 'app-client-landing',
  standalone: true,
  imports: [InsideFooterComponent, ClientNavbarComponent],
  templateUrl: './client-landing.component.html',
  styleUrl: './client-landing.component.scss'
})
export class ClientLandingComponent {

}
