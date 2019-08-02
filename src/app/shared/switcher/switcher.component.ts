import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'alx-switcher',
  styleUrls: ['./switcher.component.scss'],
  templateUrl: './switcher.component.html',
})
export class SwitcherComponent {

  @Input()
  @HostBinding('class.checked')
  public isSelected: boolean;

  @Output()
  public valueChanged = new EventEmitter<boolean>();

  public onClick(event: MouseEvent): void {
    this.valueChanged.emit(!this.isSelected);
  }
}
