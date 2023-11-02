import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { httpInterceptorProviders } from './shared/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { HeadbandBlackYellowComponent } from './components/headband-black-yellow/headband-black-yellow.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { H1ComponentComponent } from './components/h1-component/h1-component.component';
import { FormRedirectComponent } from './pages/form-redirect/form-redirect.component';
import { OurvaluesComponent } from './ourvalues/ourvalues.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { OurhomeservicesComponent } from './ourhomeservices/ourhomeservices.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    ContactComponent,
    AboutUsComponent,
    ServicesComponent,
    GalleryComponent,
    ContactFormComponent,
    HeadbandBlackYellowComponent,
    H1ComponentComponent,
    FormRedirectComponent,
    OurvaluesComponent,
    OurserviceComponent,
    LoaderComponent,
    PresentationComponent,
    SiteMapComponent,
    InterventionComponent,
    OurhomeservicesComponent,
  
  

    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [ AuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
