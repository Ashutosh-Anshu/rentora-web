import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (!tokenService.hasToken()) {
     return router.createUrlTree(['/auth/login']);
  }

  return true;
};
