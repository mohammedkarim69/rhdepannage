import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import * as Email from 'smtpjs/smtp';
declare global {
  interface Window {
    Email: any; // Définir Email en tant que propriété globale sur l'objet Window
  }
}
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  sendContactForm = this.formBuilder.group({
    compagnyFormControl: new FormControl('', [Validators.maxLength(255)]),
    lastnameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
    ]),
    firstnameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
    ]),
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phoneFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10}$/),
    ]),
    titleFormControl: new FormControl('', [Validators.required]),
    knowingFormControl: new FormControl(''),
    messageFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1000),
    ]),
  });

  onSubmitContactForm(): void {
    console.log(this.sendContactForm.value);
    if (this.sendContactForm.valid) {
      console.log('yes');
    } else {
      this.touchedAllFieldsets(this.sendContactForm);
    }
  }

  // Fonction pour marquer tous les champs comme "touched"
  private touchedAllFieldsets(form: FormGroup) {
    Object.keys(form.controls).forEach((controlName) => {
      form.controls[controlName].markAsTouched();
    });
  }
}
