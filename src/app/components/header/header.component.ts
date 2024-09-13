import { Component, HostListener, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Menu } from 'src/app/shared/interfaces/Menu';
import { CITY_LIST, NAVBAR_MENU } from 'src/app/shared/variables';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbar: Menu[] = NAVBAR_MENU;
  menu: any;
  displayMenuBurger = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth >= 768) {
      document.body.classList.remove('no-scroll');
    }
  }

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    const actual = "dépannage, depannage, voiture, remorquage, 24/7, Rhône, assistance routière Rhône, remorquage Rhône, dépannage urgence, remorque voiture Lyon, ";
    // Générer les mots-clés "dépannage [ville]"
    const keywords = CITY_LIST.map(city => `dépannage ${city.name}, depannage ${city.name}, remorquage  ${city.name}`).join(', ');

    // Ajouter la balise meta avec les mots-clés
    this.meta.updateTag({ name: 'keywords', content: actual + keywords });
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
