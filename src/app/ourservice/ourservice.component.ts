import { Component } from '@angular/core';
import { myServices } from '../arrayservices';

@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.scss'],
})
export class OurserviceComponent {
  myServices = myServices;
}
