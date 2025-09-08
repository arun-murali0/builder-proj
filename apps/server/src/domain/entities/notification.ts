export class Notification {
  public readonly notificationId?: string;
  public userId: string;
  public message: string;
  public type: string;
  public isRead: boolean;
  public createdAt?: Date;

  constructor(userId: string, message: string, type: string, isRead: boolean) {
    this.isRead = isRead;
    this.message = message;
    this.userId = userId;
    this.type = type;
  }

  get isREAD() {
    return this.isRead || false;
  }

  get getMessage() {
    return this.message;
  }

  get getuserId() {
    return this.userId;
  }
}
