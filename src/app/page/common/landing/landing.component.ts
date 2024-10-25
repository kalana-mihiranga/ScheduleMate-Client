import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../common/component/footer/footer.component';
import { NavbarComponent } from '../../../common/component/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  feedItems: any[] = [
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
    {
      id: 10,
      businessName: "Anya Boat Tours",
      description: "Madu River Based Boat Safari",
      location: "Ambalangoda, SL",
      rating: 4.5,
      imageUrl: "https://belfasthills.org/wp-content/uploads/2014/02/Sample-image-2-150x150.jpg"
    },
  ];

}
