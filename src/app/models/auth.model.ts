export interface AuthState {
    authToken: string | null;
    isAuthenticated: boolean;
    error: string | null;
    loading: boolean;
}
