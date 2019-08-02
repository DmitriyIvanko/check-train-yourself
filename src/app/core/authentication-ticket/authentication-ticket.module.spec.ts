import { AuthenticationTicketModule } from './authentication-ticket.module';

describe('AuthenticationTicketModule', () => {
  let authenticationTicketModule: AuthenticationTicketModule;

  beforeEach(() => {
    authenticationTicketModule = new AuthenticationTicketModule();
  });

  it('should create an instance', () => {
    expect(authenticationTicketModule).toBeTruthy();
  });
});
