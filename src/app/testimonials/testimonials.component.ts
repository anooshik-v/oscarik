import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials=[
    {name:"Anooshik", url: 'https://material.angular.io/assets/img/examples/shiba1.jpg', position:"Kahu/Human-in-Chief", review: "Oscar is the best alarm system I never knew I needed. Whether it's the doorbell, a leaf blowing by, my grocerries or a suspicious-looking Amazon box, he's on it. I'm not sure what I'd do without his daily 'reminders' to feed him treats and provide belly rubs."},
    {name:"Neighborhood's Cat", url: 'https://material.angular.io/assets/img/examples/shiba1.jpg',position:"Reluctant Rival", review: "He barks at me every day without fail. Honestly, it’s kind of flattering. I must be doing something right if I’m still his main target. 10/10 would be barked at again."},
    {name:"Delivery Man", url: 'https://material.angular.io/assets/img/examples/shiba1.jpg',position:"Just doing his job", review: "I’ve never felt so protected… from myself. Every day, Oscar makes sure I’m not a threat to the house. His dedication to his craft is inspiring."},
    {name:"Pigeon #27",url: 'https://material.angular.io/assets/img/examples/shiba1.jpg', position:"Wants her breadcrumbs back", review: "Oscar has chased me up to the tree 14 times this month alone. His work ethic is unparalleled, but he needs to work on his speed if he really wants to catch me. I'd give him 4 breadcrumbs out of 5."},
    {name:"Auntie", url: 'https://material.angular.io/assets/img/examples/shiba1.jpg',position:"Favorite Person™", review: "The belly rub requests are constant, but honestly, it’s worth it. Oscar has mastered the art of looking pitifully adorable until you cave. This dog is a professional."},

  ];
}
