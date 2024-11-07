// src/app/components/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Offer } from '../../models/offer.model';
import * as OffersActions from '../../state/offers/offers.actions';
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
  offers$: Observable<Offer[]> = this.store.select(selectOffers);
  error$: Observable<string | null> = this.store.select(selectOffersError);
  loading$: Observable<boolean> = this.store.select(selectOffersLoading); // Track loading state

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(OffersActions.loadOffers());

    // Subscribe to offers$ and log the offers to the console
    this.offers$.subscribe((offers) => {
      console.log('Offers:', JSON.stringify(offers));
    });
  }
}
