import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
// import { Email } from '../../shared/interfaces/smtpjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  // contactForm = this.formBuilder.group({
  //   compagny: ['Société...', [Validators.maxLength(50)]],
  // });

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

      const formData = require('form-data');
      const Mailgun = require('mailgun.js');
      const mailgun = new Mailgun(formData);
      const mg = mailgun.client({
        username: 'api',
        key: '4b0d923776544e90208db655f744b350-3750a53b-2c04948e',
      });
      mg.messages
        .create('sandboxe59f8c14eda1454ba60558102ceb19f3.mailgun.org', {
          from: 'guillaume.cometto@gmail.com',
          to: [this.sendContactForm.value.emailFormControl!],
          subject: this.sendContactForm.value.titleFormControl!,
          text: this.sendContactForm.value.messageFormControl!,
        })
        .then((msg: any) => console.log(msg)) // logs response data
        .catch((err: any) => console.log(err)); // logs any error`;

      const API_KEY = 'pubkey-3226a4fb225c3e9f83009df0cac6c07d';
      const DOMAIN = 'sandboxe59f8c14eda1454ba60558102ceb19f3.mailgun.org';
      const mailgun = new Mailgun(formData);
      const client = mailgun.client({ username: 'api', key: API_KEY });

      const messageData = {
        from: 'guillaume.cometto@gmail.com',
        to: [this.sendContactForm.value.emailFormControl!],
        subject: this.sendContactForm.value.titleFormControl!,
        text: this.sendContactForm.value.messageFormControl!,
      };

      client.messages
        .create(DOMAIN, messageData)
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.error(err);
        });
      // ' 09f68f98-31f8-48d7-899f-ae05e285b3f0'
      // Email.send({
      //   SecureToken : "d3253c0c-2e5f-4d86-a583-bf6e996862df",
      //   To : this.sendContactForm.value.emailFormControl!,
      //   From : "guillaume.cometto@gmail.com",
      //   Subject : this.sendContactForm.value.titleFormControl!,
      //   Body : this.sendContactForm.value.messageFormControl!
      // }).then(
      //       (message:any) => alert(message)
      //     );
    } else {
      this.marquerChampsCommeTouched(this.sendContactForm);
    }
  }

  // Fonction pour marquer tous les champs comme "touched"
  private marquerChampsCommeTouched(form: FormGroup) {
    Object.keys(form.controls).forEach((controlName) => {
      form.controls[controlName].markAsTouched();
    });
  }
}
