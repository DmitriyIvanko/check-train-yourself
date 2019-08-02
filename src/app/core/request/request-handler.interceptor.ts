import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  first,
  switchMap,
} from 'rxjs/operators';

import { AppSettings } from 'app.settings';
import { AppState } from 'app.state';
import {
  AUTHENTICATION_URL,
  fromAuthenticationTicket,
} from '../authentication-ticket';

@Injectable()
export class RequestHandlerInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<AppState>,
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedReq = req.clone({
      url: AppSettings.connectionString + req.url,
    });

    return this.store.pipe(
      select(fromAuthenticationTicket.getAuthenticationTicketEntity),
      first(),
      switchMap((authTicket) => {
        const isAuthentiation = modifiedReq.url.indexOf(AUTHENTICATION_URL) !== -1;

        if (!isAuthentiation) {
          modifiedReq = this.addAuthHeader(modifiedReq, authTicket.accessToken);
        }

        return next.handle(modifiedReq);
      }),
    );
  }

  private addAuthHeader(request: HttpRequest<any>, accessToken: string): HttpRequest<any> {
    return request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
  }
}
