import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { SignInContainer } from './sign-in.container';

const ROUTES: Routes = [
  {
    component: SignInContainer,
    path: '',
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
  ],
})
export class SignInRoutingModule { }
