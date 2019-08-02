import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'alx-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {

  public date = new Date();

  public distribution: string;

  public login: string;

  public password: string;

  @Output()
  public signIn = new EventEmitter<{ login: string, password: string }>();

  public onLoginChanged(value: string): void {
    this.login = value;
  }

  public onPasswordChanged(value: string): void {
    this.password = value;
  }

  public onSignInClick(): void {
    this.signIn.emit({
      login: this.login,
      password: this.password,
    });
  }
}
