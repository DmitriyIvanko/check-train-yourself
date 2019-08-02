import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { AUTHENTIFICATION_TICKET } from './authentication-ticket.mock';
import { AuthenticationTicketModel } from './authentication-ticket.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationTicketMockService {

  public getAuthenticationTiket(login: string, password: string): Observable<AuthenticationTicketModel> {
    return of(AUTHENTIFICATION_TICKET);
  }

  public refreshAuthenticationTicket(refreshToken: string): Observable<AuthenticationTicketModel> {
    return of(AUTHENTIFICATION_TICKET);
  }
}
