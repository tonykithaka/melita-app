import { Offer } from "./offer.model";

export interface Subscription {
    id: string;
    name: string;
    type: string;
    line: number;
}

export interface OffersState {
    offers: Offer[];
    subscriptions: Subscription[];
    error: string | null;
}