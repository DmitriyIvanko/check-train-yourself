import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  select,
  Store,
} from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  first,
  map,
  switchMap,
} from 'rxjs/operators';

import { AppState } from 'app.state';
import { NotificationService } from '../notification';
import {
  AuthenticationTicketActionTypes,
  RefreshAuthenticationTicketAction,
  RefreshAuthenticationTicketApprovedAction,
  RefreshAuthenticationTicketSuccessAction,
  SignInUserAction,
  SignInUserFailAction,
  SignInUserSuccessAction,
} from './authentication-ticket.actions';
import { AuthenticationTicketService } from './authentication-ticket.service';
import { UserRoleEnum } from './user-role.enum';

import * as fromAuthenticketionTicket from './authentication-ticket.reducer';

@Injectable()
export class AuthenticationTicketEffects {

  @Effect({ dispatch: false })
  public isAuthenticationTicketRefreshing$ = this.actions$.pipe(
    ofType<RefreshAuthenticationTicketAction>(
      AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET,
    ),
    switchMap((action) => {
      return this.store.pipe(
        select(fromAuthenticketionTicket.getAuthenticationTicketIsUpdating),
        first(),
        map((isUpdating) => {
          if (!isUpdating) {
            this.store.dispatch(new RefreshAuthenticationTicketApprovedAction());
          }
        }),
      );
    }),
  );

  @Effect({ dispatch: false })
  public onSignInSuccess$ = this.actions$.pipe(
    ofType<SignInUserSuccessAction>(AuthenticationTicketActionTypes.SIGN_IN_USER_SUCCESS),
    map((action) => {
      switch (action.payload.role) {
        case UserRoleEnum.User: {
          this.router.navigate(['/user/']);
          break;
        }
        default: {
          // do nothing;
        }
      }
    }),
  );

  @Effect()
  public refreshAuthenticationTicket$ = this.actions$.pipe(
    ofType<RefreshAuthenticationTicketApprovedAction>(
      AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_APPROVED,
    ),
    switchMap((action) => {
      return this.store.pipe(
        select(fromAuthenticketionTicket.getAuthenticationTicketEntity),
        first(),
      );
    }),
    switchMap((authenticationTicket) => {
      return this.authenticationTicketService.refreshAuthenticationTicket(authenticationTicket.refreshToken);
    }),
    map((authenticationTicket) => {
      return new RefreshAuthenticationTicketSuccessAction(authenticationTicket);
    }),
  );

  @Effect()
  public signInUser$ = this.actions$.pipe(
    ofType<SignInUserAction>(AuthenticationTicketActionTypes.SIGN_IN_USER),
    switchMap((action) => {
      return this.authenticationTicketService.getAuthenticationTiket(
        action.payload.login,
        action.payload.password,
      ).pipe(
        map((authTicket) => {
          return new SignInUserSuccessAction(authTicket);
        }),
        catchError((error) => {
          this.notificationService.addBadNotification({
            message: error.message,
            status: error.status,
          });

          return of(new SignInUserFailAction());
        }),
      );
    }),
  );

  constructor(
    private actions$: Actions,
    private authenticationTicketService: AuthenticationTicketService,
    private notificationService: NotificationService,
    private store: Store<AppState>,
    private router: Router,
  ) { }
}
