import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OffersState } from '../../models/subscription.model';

// Define a feature selector for the offers slice of the state
export const selectOffersState = createFeatureSelector<OffersState>('offers');

// Selector to get the list of offers
export const selectOffers = createSelector(
    selectOffersState,
    (state: OffersState) => state.offers
);

export const selectSubscriptions = createSelector(
    selectOffersState,
    (state: OffersState) => state.subscriptions
);

export const selectOffersError = createSelector(
    selectOffersState,
    (state: OffersState) => state.error
);
