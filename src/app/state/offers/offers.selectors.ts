
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OffersState } from '../../models/subscription.model';

export const selectOffersState = createFeatureSelector<OffersState>('offers');

export const selectOffers = createSelector(
    selectOffersState,
    (state: OffersState) => state.offers
);

export const selectOffersError = createSelector(
    selectOffersState,
    (state: OffersState) => state.error
);

export const selectOffersLoading = createSelector(
    selectOffersState,
    (state: OffersState) => state.loading // New selector for loading
);
