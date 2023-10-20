import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmailService } from 'src/app/shared/services/email.service';
// import { SENDGRID_API_KEY } from 'src/app/shared/variables';
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
  constructor(private formBuilder: FormBuilder, private email: EmailService) {}

ngOnInit(){
//   const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(SENDGRID_API_KEY)
// const msg = {
//   to: 'guillaume.cometto@gmail.com', // Change to your recipient
//   from: 'guillaume_cometto@hotmail.fr', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error:any) => {
//     console.error(error)
//   })
}

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
    if (this.sendContactForm.valid) {
      console.log('yes');

      this.email.sendEmail(this.sendContactForm).subscribe(
        (response: any) => {
          // window.open(response);
          // console.log(response);
        },
        (error:any) => {
          console.warn(error.responseText);
          console.log({ error });
        }
      );

    } else {
      // this.touchedAllFieldsets(this.sendContactForm);
    }
  }

  // Fonction pour marquer tous les champs comme "touched"
  private touchedAllFieldsets(form: FormGroup) {
    Object.keys(form.controls).forEach((controlName) => {
      form.controls[controlName].markAsTouched();
    });
  }
}
