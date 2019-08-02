import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { SignInContainer } from './sign-in.container';

@NgModule({
  declarations: [
    SignInComponent,
    SignInContainer,
  ],
  imports: [
    FormsModule,
    SignInRoutingModule,
  ],
})
export class SignInModule { }
