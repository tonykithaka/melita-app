// src/app/services/offers.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';
import { Subscription } from '../models/subscription.model';
import { environment } from '../../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class OffersService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getOffers(): Observable<Offer[]> {
        return this.http.get<Offer[]>(`${this.apiUrl}/offers`);
    }

    getSubscriptions(offerId: string): Observable<Subscription[]> {
        return this.http.get<Subscription[]>(`${this.apiUrl}/offers/${offerId}/subscriptions`);
    }

    private getAuthHeaders(token: string): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
    }
}
