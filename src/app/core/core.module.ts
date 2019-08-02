import { HttpClientModule } from '@angular/common/http';
import {
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import { AuthenticationTicketModule } from './authentication-ticket';
import { RequestModule } from './request';

@NgModule({
  imports: [
    AuthenticationTicketModule,
    RequestModule, // should before HttmClientModule;
    HttpClientModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
