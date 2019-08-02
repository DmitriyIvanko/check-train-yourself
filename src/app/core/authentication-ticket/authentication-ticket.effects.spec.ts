import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NotificationService } from 'core';
import { AuthenticationTicketEffects } from './authentication-ticket.effects';
import { AuthenticationTicketService } from './authentication-ticket.service';

describe('AuthenticationTicketService', () => {
  /* tslint:disable:prefer-const */
  let actions$: Observable<any>;
  /* tslint:enable:prefer-const */
  let effects: AuthenticationTicketEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        AuthenticationTicketEffects,
        NotificationService,
        provideMockActions(() => actions$),
        AuthenticationTicketService,
      ],
    });

    effects = TestBed.get(AuthenticationTicketEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
