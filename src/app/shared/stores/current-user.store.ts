import { Injectable, signal } from '@angular/core';
import { AuthUser } from '../../core/models';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserStore {
  readonly user = signal<AuthUser | null>(null);

  setUser(user: AuthUser): void {
    this.user.set(user);
  }

  getUser(): AuthUser | null {
    return this.user();
  }

  clear(): void {
    this.user.set(null);
  }

}
