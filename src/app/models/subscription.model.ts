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
    loading: boolean;
}


export interface Offer {
    id: string;
    name: string;
    contractStartDate: string;
    contractEndDate: string;
}