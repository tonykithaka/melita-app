// src/app/state/offers/offers.actions.ts
import { createAction, props } from '@ngrx/store';
import { Offer } from '../../models/offer.model';
import { Subscription } from '../../models/subscription.model';

// Action to load offers
export const loadOffers = createAction('[Offers] Load Offers');

// Action dispatched on successful offer load
export const loadOffersSuccess = createAction(
    '[Offers] Load Offers Success',
    props<{ offers: Offer[] }>()
);

// Action dispatched when loading offers fails
export const loadOffersFailure = createAction(
    '[Offers] Load Offers Failure',
    props<{ error: string }>()
);

// Action to load subscriptions for a specific offer
export const loadSubscriptions = createAction(
    '[Offers] Load Subscriptions',
    props<{ offerId: string }>()
);

// Action dispatched on successful subscription load
export const loadSubscriptionsSuccess = createAction(
    '[Offers] Load Subscriptions Success',
    props<{ subscriptions: Subscription[] }>()
);

// Action dispatched when loading subscriptions fails
export const loadSubscriptionsFailure = createAction(
    '[Offers] Load Subscriptions Failure',
    props<{ error: string }>()
);
