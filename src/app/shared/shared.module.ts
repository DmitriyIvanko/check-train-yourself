import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BadNotificationComponent } from './bad-notification';
import { CheckboxComponent } from './checkbox';
import { NeutralNotificationComponent } from './neutral-notification';
import { RadioComponent } from './radio';
import { SwitcherComponent } from './switcher';

const COMPONENT_LIST = [
  BadNotificationComponent,
  CheckboxComponent,
  NeutralNotificationComponent,
  RadioComponent,
  SwitcherComponent,
];

@NgModule({
  declarations: COMPONENT_LIST,
  exports: COMPONENT_LIST,
})
export class SharedModule { }
