import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-arrow-up',
  templateUrl: './arrow-up.component.html',
  styleUrls: ['./arrow-up.component.scss']
})
export class ArrowUpComponent {
  scrollPosition = 0;


  scrollToTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  @HostListener('window:scroll', [])
    onScroll(): void {
      this.scrollPosition = window.pageYOffset  ||document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log(this.scrollPosition);
    }
}

