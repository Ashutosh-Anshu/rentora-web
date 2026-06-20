import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidation {

  isInvalid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  hasError(form: FormGroup, controlName: string, errorName: string): boolean {
    const control = form.get(controlName);
    return !!(control?.hasError(errorName) && (control.touched || control.dirty));
  }

  getControl(form: FormGroup, controlName: string): AbstractControl | null {
    return form.get(controlName);
  }

  passwordMatchValidator(passwordKey: string = 'password', confirmPasswordKey: string = 'confirmPassword'): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const password = formGroup.get(passwordKey)?.value;
      const confirmPassword = formGroup.get(confirmPasswordKey)?.value;

      if (!password || !confirmPassword) {
        return null;
      }

      return password === confirmPassword
        ? null
        : { passwordMismatch: true };
    };
  }

}
