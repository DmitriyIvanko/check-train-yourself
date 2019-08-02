import { HttpClientModule } from '@angular/common/http';
import {
  inject,
  TestBed,
} from '@angular/core/testing';

import { AuthenticationTicketService } from './authentication-ticket.service';

describe('AuthenticationTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        AuthenticationTicketService,
      ],
    });
  });

  it('should be created', inject([AuthenticationTicketService], (service: AuthenticationTicketService) => {
    expect(service).toBeTruthy();
  }));
});
