import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/shared/interfaces/Menu';
import { CITY_LIST } from 'src/app/shared/variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  city: string = 'Sablons';
  title: string = 'RH Dépannage ' + this.city;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.findSlugParams();
  }

  findSlugParams(): void {
    this.route.params.subscribe((params) => {
      this.city = params['city'] ? this.findCityName(params['city']) : 'Sablons';
      this.title = 'RH Dépannage ' + this.city;
    });
  }

  findCityName(inputString: string): string {
    for (let city of CITY_LIST) {
      if (city.routerLink === '/accueil/' + inputString) {
        return city.name;
      }
    }
    return 'Sablons';
  }
}
