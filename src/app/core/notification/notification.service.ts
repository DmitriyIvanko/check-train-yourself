import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
} from 'rxjs';

import { NotificationModel } from './notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public badNotificationAdded$: Observable<NotificationModel>;
  public neutralNotificationAdded$: Observable<NotificationModel>;

  private badNotificationAddedSource: Subject<NotificationModel>;
  private neutralNotificationAddedSource: Subject<NotificationModel>;

  constructor() {
    this.badNotificationAddedSource = new Subject<NotificationModel>();
    this.badNotificationAdded$ = this.badNotificationAddedSource.asObservable();

    this.neutralNotificationAddedSource = new Subject<NotificationModel>();
    this.neutralNotificationAdded$ = this.neutralNotificationAddedSource.asObservable();
  }

  public addBadNotification(notification: NotificationModel): void {
    this.badNotificationAddedSource.next(notification);
  }

  public addNeutralNotification(notification: NotificationModel): void {
    this.neutralNotificationAddedSource.next(notification);
  }
}
