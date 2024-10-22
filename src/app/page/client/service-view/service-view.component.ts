import { Component } from '@angular/core';
import { ClientNavbarComponent } from '../../../common/component/client-navbar/client-navbar.component';
import { InsideFooterComponent } from '../../../common/component/inside-footer/inside-footer.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-view',
  standalone: true,
  imports: [InsideFooterComponent, ClientNavbarComponent, NgbTimepickerModule, FormsModule, JsonPipe, CommonModule],
  templateUrl: './service-view.component.html',
  styleUrl: './service-view.component.scss'
})
export class ServiceViewComponent {

  time = { hour: 13, minute: 30 };

  images: string[] = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hdGNoZXxlbnwwfHx8fDE2OTY0MTkzMTA&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1516728778615-2d590ea185b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1hdGNoZXxlbnwwfHx8fDE2OTY0MTkzMTA&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1524504389245-5697d051bfc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI5fHxjdXN0b218ZW58MHx8fHwxNjk2NDE5MzE4&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1497033001923-97e7d69f7df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxjb250YWluZXJ8ZW58MHx8fHwxNjk2NDE5MzE5&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1541341992106-195a63360e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxjb250YWluZXJ8ZW58MHx8fHwxNjk2NDE5MzIw&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1534056452700-d4235b5c9c47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxjb250YWluZXJ8ZW58MHx8fHwxNjk2NDE5MzI0&ixlib=rb-4.0.3&q=80&w=200',
];

}
