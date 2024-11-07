import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Offer } from '../models/offer.model';
import { Subscription } from '../models/subscription.model';
import { environment } from '../../environments/environments';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../state/auth/auth.selectors'; // Import the auth token selector

@Injectable({
    providedIn: 'root'
})
export class OffersService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient, private store: Store) { }

    getOffers(): Observable<{ offers: Offer[] }> {
        return this.store.select(selectAuthToken).pipe(
            take(1), // Get the current token once
            switchMap(token => {
                const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
                // Expect the response to be { offers: Offer[] }
                return this.http.get<{ offers: Offer[] }>(`${this.apiUrl}/offers`, { headers });
            })
        );
    }

    getSubscriptions(offerId: string): Observable<Subscription[]> {
        return this.store.select(selectAuthToken).pipe(
            take(1),
            switchMap(token => {
                const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
                return this.http.get<Subscription[]>(`${this.apiUrl}/offers/${offerId}/subscriptions`, { headers });
            })
        );
    }
}
