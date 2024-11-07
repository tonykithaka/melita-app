// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AuthActions from '../../state/auth/auth.actions';
import { selectAuthError, selectIsAuthenticated } from '../../state/auth/auth.selectors';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;
    error$ = this.store.select(selectAuthError);
    isAuthenticated$ = this.store.select(selectIsAuthenticated);

    constructor(
        private fb: FormBuilder,
        private store: Store,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // Redirect on successful login
        this.isAuthenticated$.subscribe(isAuthenticated => {
          if (isAuthenticated) {
              this.router.navigate(['/home']);
          }
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            const { username, password } = this.loginForm.value;
            this.store.dispatch(AuthActions.login({ username, password }));
        }
    }
}
