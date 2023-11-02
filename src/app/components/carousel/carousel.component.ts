import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  constructor() {  
    setInterval(() => {    
         this.currentIndex = (this.currentIndex + 1) % this.images.length;    
         }, 4000);
        }

  images = ['../../assets/images/panne-camion-transporteur-pendant-travail-utilisant-transporteur-ceinture-verrouillee-autre-voiture-verte.jpg',

  '../../assets/images/03.jpg',

  '../../assets/images/06.jpg'];

    currentIndex = 0;

     
}
