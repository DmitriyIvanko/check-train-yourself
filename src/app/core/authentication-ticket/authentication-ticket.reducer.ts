import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { rehydrate } from '../utils';
import {
  AuthenticationTicketActions,
  AuthenticationTicketActionTypes,
} from './authentication-ticket.actions';
import { AuthenticationTicketModel } from './authentication-ticket.model';

export const REDUCER_KEY = '[ENTITY] AUTHENTICATION_TICKET';

export interface State {
  readonly entity: AuthenticationTicketModel;
  readonly isFailed: boolean;
  readonly isUpdating: boolean;
}

function init(): State {
  const cachedState = JSON.parse(sessionStorage.getItem(REDUCER_KEY)) as State;
  const entity = cachedState && cachedState.entity || undefined;
  const isFailed = cachedState && cachedState.isFailed || false;
  const isUpdating = cachedState && cachedState.isUpdating || false;

  return {
    entity,
    isFailed,
    isUpdating,
  } as State;
}

export function reducer(
  state = init(),
  action: AuthenticationTicketActions,
): State {
  switch (action.type) {
    case AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_APPROVED:
      return rehydrate(REDUCER_KEY, state, {
        isUpdating: true,
      }, 'session');
    case AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_FAIL:
      return rehydrate(REDUCER_KEY, state, {
        isFailed: true,
        isUpdating: false,
      }, 'session');
    case AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_SUCCESS:
      return rehydrate(REDUCER_KEY, state, {
        entity: action.payload,
        isUpdating: false,
      }, 'session');
    case AuthenticationTicketActionTypes.SIGN_IN_USER:
      return rehydrate(REDUCER_KEY, state, {
        isUpdating: true,
      }, 'session');
    case AuthenticationTicketActionTypes.SIGN_IN_USER_FAIL:
      return rehydrate(REDUCER_KEY, state, {
        isFailed: true,
        isUpdating: false,
      }, 'session');
    case AuthenticationTicketActionTypes.SIGN_IN_USER_SUCCESS:
      return rehydrate(REDUCER_KEY, state, {
        entity: action.payload,
        isUpdating: false,
      }, 'session');
    default:
      return state;
  }
}

const getState = createFeatureSelector<State>(REDUCER_KEY);

export const getAuthenticationTicketEntity = createSelector(
  getState,
  (state) => state.entity,
);

export const getAuthenticationTicketIsUpdating = createSelector(
  getState,
  (state) => state.isUpdating,
);
