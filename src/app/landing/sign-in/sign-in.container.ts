import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app.state';
import { SignInUserAction } from 'core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'alx-sign-in-container',
  template: `<alx-sign-in (signIn)='onSignIn($event)'></alx-sign-in>`,
})
/* tslint:disable:component-class-suffix */
export class SignInContainer {

  constructor(
    private store: Store<AppState>,
  ) { }

  public onSignIn(args: { login: string, password: string }): void {
    this.store.dispatch(new SignInUserAction({
      login: args.login,
      password: args.password,
    }));
  }
}
/* tslint:enable:component-class-suffix */
