import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  password: string = '';
  strengthSections: string[] = ['', '', ''];

  checkPasswordStrength() {
    const length = this.password.length;

    if (length === 0) {
      this.strengthSections = ['', '', ''];
    } else if (length < 8) {
      this.strengthSections = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && !hasDigits && !hasSymbols) {
        this.strengthSections = ['red', 'grey', 'grey'];
      } else if (hasDigits && !hasLetters && !hasSymbols) {
        this.strengthSections = ['red', 'grey', 'grey'];
      } else if (hasSymbols && !hasLetters && !hasDigits) {
        this.strengthSections = ['red', 'grey', 'grey'];
      } else if ((hasLetters && hasDigits && !hasSymbols) || 
                 (hasLetters && !hasDigits && hasSymbols) || 
                 (!hasLetters && hasDigits && hasSymbols)) {
        this.strengthSections = ['yellow', 'yellow', 'grey'];
      } else if (hasLetters && hasDigits && hasSymbols) {
        this.strengthSections = ['green', 'green', 'green'];
      }

    }
  }
}
