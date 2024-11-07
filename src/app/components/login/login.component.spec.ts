// src/app/components/login/login.component.spec.ts

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from '../../state/auth/auth.actions';

// Mock AuthService
class MockAuthService {
  login(username: string, password: string) {
    if (username === 'validUser' && password === 'validPassword') {
      return of({ authToken: 'mockAuthToken' });
    }
    return throwError({ error: 'Invalid credentials' });
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;
  let authService: MockAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,       // For form controls
        StoreModule.forRoot({}),    // Mock Store for NGRX
        RouterTestingModule         // Mock Router for navigation
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService }  // Replace AuthService with MockAuthService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as MockAuthService;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
