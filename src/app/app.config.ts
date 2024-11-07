import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './state/auth/auth.reducer';
import { offersReducer } from './state/offers/offers.reducer';
import { AuthEffects } from './state/auth/auth.effects';
import { OffersEffects } from './state/offers/offers.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore({
      auth: authReducer,
      offers: offersReducer,
    }),
    provideEffects([AuthEffects, OffersEffects]),
  ]
};
