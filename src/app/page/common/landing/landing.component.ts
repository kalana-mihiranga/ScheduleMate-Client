import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../common/component/footer/footer.component';
import { NavbarComponent } from '../../../common/component/navbar/navbar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})

export class LandingComponent {
  feedItems: any[] = [
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
    {
      id: 10,
      businessName: 'Anya Boat Tours',
      description: 'Madu River Based Boat Safari',
      location: 'Ambalangoda, SL',
      rating: 4.5,
      imageUrl:
        'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    },
  ];

  private modalService = inject(NgbModal);

  openFilterFeedModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}
