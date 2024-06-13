import { Component } from '@angular/core';
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

  toggleMenu() {
    this.displayMenuBurger = !this.displayMenuBurger;
  }
}
