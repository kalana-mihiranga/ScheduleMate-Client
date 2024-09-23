import { Component } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from '../../shared/component/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/component/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
