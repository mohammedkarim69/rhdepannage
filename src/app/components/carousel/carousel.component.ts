import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  constructor() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  images = [
    '../../assets/images/photovoiturejaune.jpg',
    '../../assets/images/photodepmoto.jpg',
    '../../assets/images/porsche.jpg',
    '../../assets/images/photodepcamion.jpg',
    '../../assets/images/photodepboue.jpg',
    '../../assets/images/panne-camion-transporteur-pendant-travail-utilisant-transporteur-ceinture-verrouillee-autre-voiture-verte.jpg',
  ];

  currentIndex = 0;
}
