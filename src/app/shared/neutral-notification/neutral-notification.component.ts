import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

import {
  NotificationModel,
  NotificationService,
} from 'core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cty-neutral-notification',
  styleUrls: ['./neutral-notification.component.scss'],
  templateUrl: './neutral-notification.component.html',
})
export class NeutralNotificationComponent implements OnDestroy, OnInit {

  public notificationList: NotificationModel[];

  private subscription = new Subscription();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationService,
  ) { }

  public close(index: number): void {
    this.notificationList.splice(index, 1);
  }

  public identifyNotificationList(index: number, notification: NotificationModel): string {
    return notification.message;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit(): void {
    this.notificationList = [];

    this.subscription.add(this.notificationService.neutralNotificationAdded$
      .subscribe((notification) => {
        this.notificationList.push(notification);
        this.changeDetectorRef.detectChanges();
      }));
  }
}
