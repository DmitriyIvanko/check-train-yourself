import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'alx-radio',
  styleUrls: ['./radio.component.scss'],
  templateUrl: './radio.component.html',
})
export class RadioComponent {
}
