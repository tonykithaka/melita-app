// src/app/components/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as OffersActions from '../../state/offers/offers.actions';
import { selectOffers, selectSubscriptions } from '../../state/offers/offers.selectors';
import { Observable, timer, Subscription } from 'rxjs';
import { Offer } from '../../models/offer.model';
import { Subscription as Sub } from '../../models/subscription.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  offers$: Observable<Offer[]> = this.store.select(selectOffers);
  subscriptions$: Observable<Sub[]> = this.store.select(selectSubscriptions);
  countdown = 0;
  private countdownSubscription: Subscription | null = null;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(OffersActions.loadOffers());
  }

  onRefresh(): void {
    if (this.countdown === 0) {
      this.store.dispatch(OffersActions.loadOffers());
      this.startCountdown();
    }
  }

  private startCountdown(): void {
    this.countdown = 10;
    const countdownTimer = timer(0, 1000);

    this.countdownSubscription = countdownTimer.subscribe(val => {
      this.countdown = 10 - val;
      if (this.countdown <= 0 && this.countdownSubscription) {
        this.countdownSubscription.unsubscribe(); // Unsubscribe when countdown reaches zero
        this.countdownSubscription = null;       // Clear the subscription reference
      }
    });
  }
}
