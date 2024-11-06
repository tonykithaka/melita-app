import { Offer } from "./offer.model";

export interface Subscription {
    id: string;
    name: string;
    line: string;
    // Add other properties as needed
}

export interface OffersState {
    offers: Offer[];
    subscriptions: Subscription[];
    error: string | null;
}