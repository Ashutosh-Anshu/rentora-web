import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { TokenService } from './core/auth';
import { MenuService, UserService } from './core/services';
import { MenuStore, UserStore } from './shared/stores';
import { forkJoin, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rentora-web');

  private tokenService = inject(TokenService);
  private menuService = inject(MenuService);
  private userStore = inject(UserStore);
  private menuStore = inject(MenuStore);
  private router = inject(Router);
  private userService = inject(UserService);

  async ngOnInit() {
    if (this.tokenService.hasToken()) {
      const userId = this.tokenService.getUserId();
      const results = await lastValueFrom(
        forkJoin({
          user: this.userService.getUserById(userId),
          menus: this.menuService.getMenus(userId)
        })
      );

      this.userStore.setUser(results.user.data);
      this.menuStore.setMenus(results.menus.data);

    }
    else {
      this.router.navigate(['/']);
    }
  }
}



