import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/Menu';
import { NAVBAR_MENU, CITY_LIST } from 'src/app/shared/variables';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent {
  title : string = "Plan du Site"
  menu : Menu[] = NAVBAR_MENU
  citiesList : Menu[] = CITY_LIST
  servicesList : string[] = ['Dépannage', 'Remorquage', "Enlèvement d'épave"]
}
