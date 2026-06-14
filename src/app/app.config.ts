import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { AuraBaseDesignTokens } from '@primeuix/themes/aura/base';
import { Preset } from '@primeuix/themes/types';

const RentoraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#2563eb',
      600: '#1d4ed8',
      700: '#1e40af',
      800: '#1e3a8a',
      900: '#172554',
      950: '#0f1c3f'
    }
  }
});

function definePreset(
  basePreset: Preset<AuraBaseDesignTokens>,
  customPreset: {
    semantic: {
      primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
    };
  }
): Preset<AuraBaseDesignTokens> {
  return {
    ...basePreset,
    semantic: {
      ...basePreset.semantic,
      primary: {
        ...basePreset.semantic?.primary,
        ...customPreset.semantic.primary
      }
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: RentoraPreset,
        options: {
          darkModeSelector: false || 'none'
        }
      }
    })
  ]
};



