// src/app/state/offers/offers.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OffersService } from '../../services/offers.service'
import * as OffersActions from './offers.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OffersEffects {

    // Effect to load offers when the 'loadOffers' action is dispatched
    loadOffers$ = createEffect(() =>
        this.actions$.pipe(

            // Filters the action stream to listen only for 'loadOffers' actions
            ofType(OffersActions.loadOffers),

            // Calls the OffersService to fetch offers and handles success or error
            mergeMap(() =>
                this.offersService.getOffers().pipe(

                    // If the API call succeeds, dispatch the 'loadOffersSuccess' action with the offers data
                    map((offers) => OffersActions.loadOffersSuccess({ offers })),

                    // If the API call fails, dispatch the 'loadOffersFailure' action with the error message
                    catchError((error) => of(OffersActions.loadOffersFailure({ error: error.message })))
                )
            )
        )
    );

    // Inject the Actions stream and the OffersService to allow the effect to listen to actions and make API calls
    constructor(private actions$: Actions, private offersService: OffersService) { }
}
