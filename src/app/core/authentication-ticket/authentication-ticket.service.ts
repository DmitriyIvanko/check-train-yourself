import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpOptionsModel } from '../request';
import { AppSettings } from 'app.settings';
import { AuthenticationTicketMapper } from './authentication-ticket.mapper';
import { AuthenticationTicketModel } from './authentication-ticket.model';

export const AUTHENTICATION_URL = `oauth/token`;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationTicketService {
  private authenticationTiketMapper: AuthenticationTicketMapper;
  private headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  constructor(
    private http: HttpClient,
  ) {
    this.authenticationTiketMapper = new AuthenticationTicketMapper();
  }

  public getAuthenticationTiket(login: string, password: string): Observable<AuthenticationTicketModel> {
    const body = `grant_type=password&username=${login}&password=${password}&client_id=${
      AppSettings.clientId}&client_secret=secret&scope=read write`;

    const options = {
      body,
      headers: this.headers,
    } as HttpOptionsModel;

    return this.http.request(`POST`, AUTHENTICATION_URL, options).pipe(
      map((response) => {
        return this.authenticationTiketMapper.mapInstanceToClient(response);
      }),
    );
  }

  public refreshAuthenticationTicket(refreshToken: string): Observable<AuthenticationTicketModel> {
    const body = `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${
      AppSettings.clientId}&client_secret=secret`;

    const options = {
      body,
      headers: this.headers,
    } as HttpOptionsModel;

    return this.http.request(`POST`, AUTHENTICATION_URL, options).pipe(
      map((response) => {
        return this.authenticationTiketMapper.mapInstanceToClient(response);
      }),
    );
  }
}
