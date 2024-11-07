import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../../models/auth.model';

// Define a feature selector for the auth slice of the state
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Selector to get the authentication status
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.authToken
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);
