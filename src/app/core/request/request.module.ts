import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RefreshInterceptor } from './refresh.interceptor';
import { RequestHandlerInterceptor } from './request-handler.interceptor';

@NgModule({
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshInterceptor,
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHandlerInterceptor,
    },
  ],
})
export class RequestModule { }
