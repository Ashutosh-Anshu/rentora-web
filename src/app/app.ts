import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { TokenService } from './core/auth';
import { MenuService } from './core/services';
import { MenuStore } from './shared/stores';

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
  private menuStore = inject(MenuStore);
  private router = inject(Router);

  async ngOnInit() {
    if (this.tokenService.hasToken()) {
      this.menuService.getMenus().subscribe((res) => {
        if (res.success) {
          this.menuStore.setMenus(res.data);
        }
      });
    }
    else {
      this.router.navigate(['/auth/login']);
    }
  }
}



