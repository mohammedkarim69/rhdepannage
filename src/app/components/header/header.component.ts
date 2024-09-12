import { Component, HostListener } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/Menu';
import { NAVBAR_MENU } from 'src/app/shared/variables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navbar: Menu[] = NAVBAR_MENU;
  menu: any;
  displayMenuBurger = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth >= 768) {
      document.body.classList.remove('no-scroll');
    }
  }

  toggleMenu() {
    this.displayMenuBurger = !this.displayMenuBurger;
    this.adaptNoScroll();
  }

  private adaptNoScroll(): void {
    if (this.displayMenuBurger) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
