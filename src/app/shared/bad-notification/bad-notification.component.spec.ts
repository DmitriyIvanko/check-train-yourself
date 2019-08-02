import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { NotificationService } from 'core';
import { BadNotificationComponent } from './bad-notification.component';

describe('BadNotificationComponent', () => {
  let component: BadNotificationComponent;
  let fixture: ComponentFixture<BadNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BadNotificationComponent,
      ],
      providers: [
        NotificationService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
