import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState } from '../../models/auth.model';

export const initialState: AuthState = {
    authToken: null,
    isAuthenticated: false,
    error: null,
    loading: false, // Initialize loading as false
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state) => ({
        ...state,
        loading: true, // Set loading to true when login is initiated
        error: null,
    })),
    on(AuthActions.loginSuccess, (state, { authToken }) => ({
        ...state,
        authToken,
        isAuthenticated: true,
        loading: false, // Set loading to false on success
        error: null,
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        loading: false, // Set loading to false on failure
        isAuthenticated: false,
        error,
    })),
    on(AuthActions.logout, () => initialState)
);
