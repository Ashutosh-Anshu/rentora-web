import { Component, inject } from '@angular/core';
import { FormValidation, UiStateService } from '../../../shared/services';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService, TokenService } from '../../../core/auth';
import { MenuStore, UserStore } from '../../../shared/stores';
import { MenuService } from '../../../core/services';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CheckboxModule,
    FloatLabelModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login extends UiStateService {
  private fb = inject(FormBuilder);
  public v = inject(FormValidation);
  private authService = inject(AuthService);
  private tokenService = inject(TokenService);
  private menuService = inject(MenuService);
  private menuStore = inject(MenuStore);
  private userStore = inject(UserStore);
  private router = inject(Router);


  constructor() {
    super();
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false]
  });


  async onSubmit(): Promise<void> {
    this.disableAction();

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.restore();
      return;
    }

    this.showLoadingPanel();

    try {
      const response = await firstValueFrom(
        this.authService.login(this.loginForm.value)
      );

      if (response.errors?.length) {
        const errorMessage = response.errors
          .map(error => error.description)
          .join('\n');

        this.showError(errorMessage);
        return;
      }

      // Save authentication
      this.tokenService.setTokens(
        response.data.accessToken,
        response.data.refreshToken,
        this.loginForm.value.rememberMe
      );

      this.userStore.setUser(response.data.user);

      // Load application menus
      const menuResponse = await firstValueFrom(
        this.menuService.getMenus(this.tokenService.getUserId())
      );

      if (!menuResponse.success) {
        this.tokenService.clearToken();
        this.userStore.clear();
        this.menuStore.clear();

        this.showError(menuResponse.message ?? 'Unable to load application.');

        await this.router.navigate(['/login']);
        return;
      }

      this.menuStore.setMenus(menuResponse.data);

      await this.router.navigate(['/dashboard']);

    } catch (error) {
      console.error(error);

      this.tokenService.clearToken();
      this.userStore.clear();
      this.menuStore.clear();

      this.showError('Unable to login. Please try again.');
    } finally {
      this.restore();
    }
  }

  loginWithGoogle(): void {
    // Google OAuth
  }
}
