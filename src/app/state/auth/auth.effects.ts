import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

    // Define an effect to handle the login action
    login$ = createEffect(() =>
        this.actions$.pipe(
            // Listen for the 'login' action type
            ofType(AuthActions.login),
            // Use mergeMap to handle async login operation with AuthService
            mergeMap((action) =>
                this.authService.login(action.username, action.password).pipe(
                    // On successful login, dispatch 'loginSuccess' with the token
                    map((response) => AuthActions.loginSuccess({ authToken: response.authToken })),
                    // On login failure, dispatch 'loginFailure' with an error message
                    catchError((error) => of(AuthActions.loginFailure({ error: error.message })))
                )
            )
        )
    );

    logout$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => this.router.navigate(['/login']))
          ),
        { dispatch: false }
      );

    // Inject the Actions stream and AuthService dependency
    constructor(private actions$: Actions, private authService: AuthService,  private router: Router) { }
}