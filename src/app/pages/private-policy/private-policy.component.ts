import { Component } from '@angular/core';
import { EMAIL_OFFICIAL } from 'src/app/shared/variables';

@Component({
  selector: 'app-private-policy',
  templateUrl: './private-policy.component.html',
  styleUrls: ['./private-policy.component.scss']
})
export class PrivatePolicyComponent {
  title : string = "Politique de confidentialité"
  email = EMAIL_OFFICIAL
}
