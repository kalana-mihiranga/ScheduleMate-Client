import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../page/common/common.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router, private commonService: CommonService) {

  }

  logout () {
    this.commonService.clear();
    this.router.navigate(['/login']);
  }

}
