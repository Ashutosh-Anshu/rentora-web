import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly ACCESS_TOKEN = 'access_token';
  private readonly REFRESH_TOKEN = 'refresh_token';

  setTokens(
    accessToken: string,
    refreshToken: string,
    rememberMe: boolean
  ): void {
    const storage = rememberMe ? localStorage : sessionStorage;

    storage.setItem(this.ACCESS_TOKEN, accessToken);
    storage.setItem(this.REFRESH_TOKEN, refreshToken);
  }

  getUserId(): string {
    const token = this.getAccessToken();
    if (!token) return '';

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.sub;
    } catch {
      return '';
    }
  }

  getAccessToken(): string | null {
    return (
      localStorage.getItem(this.ACCESS_TOKEN) ??
      sessionStorage.getItem(this.ACCESS_TOKEN)
    );
  }

  getRefreshToken(): string | null {
    return (
      localStorage.getItem(this.REFRESH_TOKEN) ??
      sessionStorage.getItem(this.REFRESH_TOKEN)
    );
  }

  clearToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);

    sessionStorage.removeItem(this.ACCESS_TOKEN);
    sessionStorage.removeItem(this.REFRESH_TOKEN);
  }

  hasToken(): boolean {
    return !!this.getAccessToken();
  }
}
