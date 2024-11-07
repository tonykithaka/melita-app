// src/app/components/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Offer } from '../../models/offer.model';
import * as OffersActions from '../../state/offers/offers.actions';
import * as AuthActions from '../../state/auth/auth.actions';
import { selectOffers, selectOffersError, selectOffersLoading } from '../../state/offers/offers.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  offers$: Observable<Offer[]> = this.store.select(selectOffers).pipe(
    map((offers) =>
      offers.slice().sort((a, b) => new Date(a.contractStartDate).getTime() - new Date(b.contractStartDate).getTime())
    )
  );
  error$: Observable<string | null> = this.store.select(selectOffersError);
  loading$: Observable<boolean> = this.store.select(selectOffersLoading);

  refreshDisabled = false;
  countdown = 10;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(OffersActions.loadOffers());
  }


  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  // Refresh offers and disable button with a countdown
  refreshOffers(): void {
    this.store.dispatch(OffersActions.loadOffers());
    this.startCountdown();
  }

  // Countdown timer for disabling the refresh button
  startCountdown(): void {
    this.refreshDisabled = true;
    const interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.refreshDisabled = false;
        this.countdown = 10; // Reset countdown
        clearInterval(interval);
      }
    }, 1000);
  }
}
