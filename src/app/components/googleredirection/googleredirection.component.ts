import { Component } from '@angular/core';
import { avisGoogle } from 'src/app/shared/avisGoogle';
import { google } from 'src/app/shared/interfaces/google';

@Component({
  selector: 'app-googleredirection',
  templateUrl: './googleredirection.component.html',
  styleUrls: ['./googleredirection.component.scss']
})
export class GoogleredirectionComponent {
  googleList: google[] = avisGoogle;
}
