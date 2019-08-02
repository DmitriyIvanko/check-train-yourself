import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Actions,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  catchError,
  switchMap,
} from 'rxjs/operators';

import { AppState } from 'app.state';
import {
  AuthenticationTicketActionTypes,
  RefreshAuthenticationTicketAction,
  RefreshAuthenticationTicketSuccessAction,
} from '../authentication-ticket';
import { HttpStatusEnum } from './http-status.enum';

@Injectable()
export class RefreshInterceptor implements HttpInterceptor {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && (error as HttpErrorResponse).status === HttpStatusEnum.Unauthorized) {
          this.store.dispatch(new RefreshAuthenticationTicketAction());
          return this.handle401Error(req, next);
        }
        return throwError(error);
      }),
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      switchMap(() => {
        return this.actions$.pipe(
          ofType<RefreshAuthenticationTicketSuccessAction>(
            AuthenticationTicketActionTypes.REFRESH_AUTHENTICATION_TICKET_SUCCESS,
          ),
          switchMap((action) => {
            return next.handle(req);
          }),
        );
      }),
    );
  }
}
