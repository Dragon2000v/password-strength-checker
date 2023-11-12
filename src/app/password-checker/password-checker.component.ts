import { Component } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  password: string = '';
  passwordBorderColor: string = '';
  passwordMessage: string = '';
  showPassword: boolean = false;
  passwordStrengthColor: string = ''; // Updated property for transparent border color

  checkPasswordStrength() {
    const length = this.password.length;

    if (length === 0) {
      this.passwordBorderColor = '';
      this.passwordMessage = '';
      this.passwordStrengthColor = '';
    } else if (length < 8) {
      this.passwordBorderColor = 'rgba(255, 0, 0, 0.5)'; // Transparent red
      this.passwordMessage = 'Password is too short';
      this.passwordStrengthColor = 'rgba(255, 0, 0, 0.1)'; // Transparent red background
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && !hasDigits && !hasSymbols) {
        this.passwordBorderColor = 'rgba(255, 0, 0, 0.5)'; // Transparent red
        this.passwordMessage = 'Password should contain digits and/or symbols';
        this.passwordStrengthColor = 'rgba(255, 0, 0, 0.1)'; // Transparent red background
      } else if (hasDigits && !hasLetters && !hasSymbols) {
        this.passwordBorderColor = 'rgba(255, 0, 0, 0.5)'; // Transparent red
        this.passwordMessage = 'Password should contain letters and/or symbols';
        this.passwordStrengthColor = 'rgba(255, 0, 0, 0.1)'; // Transparent red background
      } else if (hasSymbols && !hasLetters && !hasDigits) {
        this.passwordBorderColor = 'rgba(255, 0, 0, 0.5)'; // Transparent red
        this.passwordMessage = 'Password should contain letters and/or digits';
        this.passwordStrengthColor = 'rgba(255, 0, 0, 0.1)'; // Transparent red background
      } else if ((hasLetters && hasDigits && !hasSymbols) || 
                 (hasLetters && !hasDigits && hasSymbols) || 
                 (!hasLetters && hasDigits && hasSymbols)) {
        this.passwordBorderColor = 'rgba(255, 255, 0, 0.5)'; // Transparent yellow
        this.passwordMessage = 'Password strength is moderate';
        this.passwordStrengthColor = 'rgba(255, 255, 0, 0.1)'; // Transparent yellow background
      } else if (hasLetters && hasDigits && hasSymbols) {
        this.passwordBorderColor = 'rgba(0, 255, 0, 0.5)'; // Transparent green
        this.passwordMessage = 'Strong Password';
        this.passwordStrengthColor = 'rgba(0, 255, 0, 0.1)'; // Transparent green background
      }
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
