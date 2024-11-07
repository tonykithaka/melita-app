import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loginUrl = `${environment.apiUrl}/login`; // Use the API URL from the environment

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<{ authToken: string }> {
        const body = { username, password };
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post<{ authToken: string }>(this.loginUrl, body, { headers })
            .pipe(
                map(response => ({ authToken: response.authToken }))
            );
    }
}
