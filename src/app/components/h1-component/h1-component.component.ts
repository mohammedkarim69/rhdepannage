import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h1-component',
  templateUrl: './h1-component.component.html',
  styleUrls: ['./h1-component.component.scss'],
})
export class H1ComponentComponent {
  @Input() titleInComponent!: string;
}
