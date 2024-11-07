// src/app/state/offers/offers.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as OffersActions from './offers.actions';
import { OffersState } from '../../models/subscription.model';

export const initialState: OffersState = {
    offers: [],
    subscriptions: [],
    error: null,
};

export const offersReducer = createReducer(
    initialState,

    // Handle loading offers success
    on(OffersActions.loadOffersSuccess, (state, { offers }) => ({
        ...state,
        offers,
        error: null,
    })),

    // Handle loading offers failure
    on(OffersActions.loadOffersFailure, (state, { error }) => ({
        ...state,
        error,
    })),

    // Handle loading subscriptions success
    on(OffersActions.loadSubscriptionsSuccess, (state, { subscriptions }) => ({
        ...state,
        subscriptions,
        error: null,
    })),

    // Handle loading subscriptions failure
    on(OffersActions.loadSubscriptionsFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);
