import { Component } from '@angular/core';
import { pictureList } from 'src/app/pictureUrl';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  title: string = 'Galerie Photos';
  pictureUrl = pictureList;
}
