import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from '../../models/auth.model';

export const initialState: AuthState = {
    authToken: null,
    isAuthenticated: false,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { authToken }) => ({
        ...state,
        authToken,
        isAuthenticated: true,
        error: null,
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        isAuthenticated: false,
        error,
    })),
    on(AuthActions.logout, () => initialState)
);
