import { Action } from '@ngrx/store';

import { AuthenticationTicketModel } from './authentication-ticket.model';

export const enum AuthenticationTicketActionTypes {
  REFRESH_AUTHENTICATION_TICKET = '[AUTHENTICATION_TICKET] REFRESH_AUTHENTICATION_TICKET',
  REFRESH_AUTHENTICATION_TICKET_APPROVED = '[AUTHENTICATION_TICKET] REFRESH_AUTHENTICATION_TICKET_APPROVED',
  REFRESH_AUTHENTICATION_TICKET_FAIL = '[AUTHENTICATION_TICKET] REFRESH_AUTHENTICATION_TICKET_FAIL',
  REFRESH_AUTHENTICATION_TICKET_SUCCESS = '[AUTHENTICATION_TICKET] REFRESH_AUTHENTICATION_TICKET_SUCCESS',
  SIGN_IN_USER = '[AUTHENTICATION_TICKET] SIGN_IN_USER',
  SIGN_IN_USER_FAIL = '[AUTHENTICATION_TICKET] SIGN_IN_USER_FAIL',
  SIGN_IN_USER_SUCCESS = '[AUTHENTICATION_TICKET] SIGN_IN_USER_SUCCESS',
}

/* tslint:disable:max-classes-per-file */
export class RefreshAuthenticationTicketAction implements Action {
  public readonly type = AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET;
}

export class RefreshAuthenticationTicketApprovedAction implements Action {
  public readonly type = AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_APPROVED;
}

export class RefreshAuthenticationTicketFailAction implements Action {
  public readonly type = AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_FAIL;
}

export class RefreshAuthenticationTicketSuccessAction implements Action {
  public readonly type = AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_SUCCESS;

  constructor(public payload: AuthenticationTicketModel) { }
}

export class SignInUserAction implements Action {
  public readonly type = AuthenticationTicketActionTypes.SIGN_IN_USER;

  constructor(public payload: { login: string, password: string }) { }
}

export class SignInUserFailAction implements Action {
  public readonly type = AuthenticationTicketActionTypes.SIGN_IN_USER_FAIL;
}

export class SignInUserSuccessAction implements Action {
  public readonly type = AuthenticationTicketActionTypes.SIGN_IN_USER_SUCCESS;

  constructor(public payload: AuthenticationTicketModel) { }
}
/* tslint:enable:max-classes-per-file */

export type AuthenticationTicketActions
  = RefreshAuthenticationTicketAction
  | RefreshAuthenticationTicketApprovedAction
  | RefreshAuthenticationTicketFailAction
  | RefreshAuthenticationTicketSuccessAction
  | SignInUserAction
  | SignInUserFailAction
  | SignInUserSuccessAction;
