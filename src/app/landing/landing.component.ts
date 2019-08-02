import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cty-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent { }
