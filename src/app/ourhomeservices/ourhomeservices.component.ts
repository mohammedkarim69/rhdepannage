import { Component } from '@angular/core';

@Component({
  selector: 'app-ourhomeservices',
  templateUrl: './ourhomeservices.component.html',
  styleUrls: ['./ourhomeservices.component.scss'],
})
export class OurhomeservicesComponent {
  images = ['../../assets/images/panne-camion-transporteur-pendant-travail-utilisant-transporteur-ceinture-verrouillee-autre-voiture-verte.jpg', 
  '../../assets/images/03.jpg', 
  '../../assets/images/06.jpg']; 
    currentIndex = 0; 
      constructor() {   
          setInterval(() => {    
               this.currentIndex = (this.currentIndex + 1) % this.images.length;    
               }, 4000); 
              
              
              }
}
