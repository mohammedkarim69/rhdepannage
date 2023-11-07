import { Component, ElementRef } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/Menu';
import { CITY_LIST, NAVBAR_MENU } from 'src/app/shared/variables';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  menuList: Menu[] = NAVBAR_MENU;
  heightFooter!: number;
  cityList: Menu[] = CITY_LIST;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.documentElement.style.setProperty(
      '--height-footer',
      this.el.nativeElement.offsetHeight + 'px'
    );
    this.cityList.reverse();
  }
  
}
