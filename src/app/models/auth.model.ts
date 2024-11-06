export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    error: string | null;
}