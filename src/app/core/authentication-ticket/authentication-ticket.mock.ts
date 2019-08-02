import { AuthenticationTicketModel } from './authentication-ticket.model';
import { UserRoleEnum } from './user-role.enum';

export const AUTHENTIFICATION_TICKET: AuthenticationTicketModel = new AuthenticationTicketModel({
  accessToken: '6gWxY9olGXCKkimGBV3BLv-hQzKoRdLkpn9NnsHE7z_mru7bxTtARPT30OtdnDx5oqiVVc9CK1pbe4KADAScVIGgBWQ' +
    'turAK1mtayROfptfLCbyryWXw00E3oQuzv28x3qF5-0CHHjSNKmCCCy_4C7aSTl0u1yyQu-KabIx2kYMOpqYNlYfHLfg4ThEH_YrcEGL' +
    'YFANQwdh-U_5D_nfZpi7tSu7MjO4RcPnjDE96O6UwkebLqon9pT8zqqrKVHG4HdBECX5EXmI5nsNfcGR9RfL6ANillypv547cQa-0IX4' +
    'BE9PGGv01ypIKceCETdEa83ro-TfaIPyFxrqfOQBDQMhb-7qIKJhOxmcyzstCGhjb7uTiRC7rxgF1WHXDTLhaSLgi6sXvdNPwxV_EleE' +
    'MZwl8rHvuqpE2110u3w58UKg',
  clientId: 'ngAuthApp',
  expires: new Date('Fri, 19 May 2017 17:58:31 GMT'),
  expiresIn: 2591999,
  issued: new Date('Wed, 19 Apr 2017 12:58:11 GMT'),
  refreshToken: '2acda5774e8546ce81e61c62fda985c3',
  role: UserRoleEnum.User,
  tokenType: 'bearer',
  userId: 1,
  userName: 'test@test.com',
});
