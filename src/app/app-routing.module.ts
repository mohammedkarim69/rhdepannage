import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';
import { FormRedirectComponent } from './pages/form-redirect/form-redirect.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  { path: 'qui-sommes-nous', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallerie-photos', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'formulaire-envoye', component: FormRedirectComponent },
  { path: 'page-404', component: Page404Component },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'page-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
