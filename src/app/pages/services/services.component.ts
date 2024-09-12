import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  title: string = 'Nos Services';

  ngOnInit(): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
