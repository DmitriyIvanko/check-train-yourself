import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthenticationTicketEffects } from './authentication-ticket.effects';

import * as fromAuthenticationTicket from './authentication-ticket.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromAuthenticationTicket.REDUCER_KEY, fromAuthenticationTicket.reducer),
    EffectsModule.forFeature([AuthenticationTicketEffects]),
  ],
})
export class AuthenticationTicketModule { }
