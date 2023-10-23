import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(private http: HttpClient) {}

  isFormSubmitted: boolean = false;
  hasErrors: boolean = false;

  compagnyValue: string = '';
  lastnameValue: string = '';
  firstnameValue: string = '';
  emailValue: string = '';
  phoneValue: string = '';
  themeValue: string = '';
  messageValue: string = '';
  // konwingValue: string = '';

  changeCompagnyValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.compagnyValue = inputElement.value;
  }

  changeLastnameValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.lastnameValue = inputElement.value;
  }

  changeFirstnameValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.firstnameValue = inputElement.value;
  }

  changeEmailValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.emailValue = inputElement.value;
    this.validateEmail();
  }

  changePhoneValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.phoneValue = inputElement.value;
  }

  changeThemeValue(themeClicked: string) {
    this.themeValue = themeClicked;
  }

  changeMessageValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    this.messageValue = inputElement.value;
  }

  validateEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.emailValue);
  }

  validatePhone(): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    return this.phoneValue.match(phoneRegex) !== null;
  }

  checkStringValidity(value: string, min: number, max: number): boolean {
    if (value && value.length >= min && value.length <= max) {
      return true;
    }
    return false;
  }

  changeSubmitted(){
    this.isFormSubmitted = true;
  }

  checkErrors(): boolean {
    if (
      this.compagnyValue.length <= 255 &&
      this.checkStringValidity(this.emailValue, 3, 255) &&
      this.validateEmail() &&
      this.phoneValue &&
      this.validatePhone() &&
      this.themeValue !== '' &&
      this.checkStringValidity(this.lastnameValue, 3, 255) &&
      this.checkStringValidity(this.firstnameValue, 3, 255) &&
      this.checkStringValidity(this.messageValue, 10, 1000)
    ) {
      this.hasErrors = false
      return true;
    }
    this.hasErrors = true
    return false;
  }
}
