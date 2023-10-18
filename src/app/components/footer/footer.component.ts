import { Component } from '@angular/core';
import { Menu } from 'src/app/shared/interfaces/Menu';
import { NAVBAR_MENU } from 'src/app/shared/variables';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuList : Menu[] = NAVBAR_MENU
}
