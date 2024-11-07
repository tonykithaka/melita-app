// src/app/app.config.ts

// src/app/app.config.ts

// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';

// import { authReducer } from './state/auth/auth.reducer';
// import { offersReducer } from './state/offers/offers.reducer';
// import { AuthEffects } from './state/auth/auth.effects';
// import { OffersEffects } from './state/offers/offers.effects';
// import { appRoutes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(appRoutes),                     // Include routes
//     importProvidersFrom(HttpClientModule),        // Include HttpClientModule
//     importProvidersFrom(ReactiveFormsModule),     // Include ReactiveFormsModule
//     provideStore({
//       auth: authReducer,
//       offers: offersReducer,
//     }),
//     provideEffects([AuthEffects, OffersEffects]),
//   ]
// };

// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { authReducer } from './state/auth/auth.reducer';
import { offersReducer } from './state/offers/offers.reducer';
import { AuthEffects } from './state/auth/auth.effects';
import { OffersEffects } from './state/offers/offers.effects';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule, NgbModule),
    provideStore({
      auth: authReducer,
      offers: offersReducer,
    }),
    provideEffects([AuthEffects, OffersEffects]),
  ]
};
