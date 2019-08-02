import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { NotificationService } from 'core';
import { NeutralNotificationComponent } from './neutral-notification.component';

describe('NeutralNotificationComponent', () => {
  let component: NeutralNotificationComponent;
  let fixture: ComponentFixture<NeutralNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NeutralNotificationComponent,
      ],
      providers: [
        NotificationService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeutralNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
