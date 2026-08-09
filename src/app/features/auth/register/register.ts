import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormValidation, UiStateService } from '../../../shared/services';
import { AuthService } from '../../../core/auth';
import { Role } from '../../../shared/enums';

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
export class Register extends UiStateService {

  private fb = inject(FormBuilder);
  public v = inject(FormValidation);
  private authService = inject(AuthService);
  public Role = Role;
  private router = inject(Router);
  constructor() {
    super();
  }

  registrationForm: FormGroup = this.fb.group({
    roleId: ['', Validators.required],
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]{10}$/)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
        )
      ]
    ],
    confirmPassword: ['', [Validators.required]],
    termsAccepted: [false, Validators.requiredTrue]
  },
    {
      validators: this.v.passwordMatchValidator()
    }
  );

  async onSubmit(): Promise<void> {
    console.log('Register clicked!');
    this.disableAction();
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      this.restore();
      return;
    }
    console.log('Register clicked! 2');
    this.showLoadingPanel();

    try {
      const response = await firstValueFrom(
        this.authService.register(this.registrationForm.value)
      );

      console.log('Register clicked! 3');
      if (response.success) {
        console.log('Register clicked! 4');
        this.showSuccess(response.message);
        await this.router.navigate(['/auth/login']);
        return;
      }
      console.log('Register clicked! 5');
      this.showError(response.message ?? 'Registration failed.');
    } catch (error) {
      console.error(error);
      this.showError('Unable to register. Please try again.');
    } finally {
      this.restore();
    }
  }

  loginWithGoogle(): void {
    // Google OAuth
  }
}
