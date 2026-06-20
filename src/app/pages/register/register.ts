import { CommonModule } from '@angular/common';
import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormValidation } from '../../shared';
@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    FloatLabelModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  loading = signal(false);
  private fb = inject(FormBuilder);
  public v = inject(FormValidation);

  constructor() { }


  registrationForm: FormGroup = this.fb.group({
      role: ['tenant'],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    },
    {
      validators: this.v.passwordMatchValidator()
    }
  );


  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      this.loading.set(false);
      console.log('Registration payload', this.registrationForm.value);
    }, 1200);
  }

  loginWithGoogle(): void {
    // Google OAuth
  }
}
