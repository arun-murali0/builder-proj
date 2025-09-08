import { BookingStatus } from '../types';

export class Booking {
  public readonly bookingId: string;
  public amenityId: string;
  public tenantId: string;
  public startTime?: Date;
  public endTime?: Date;
  public status: BookingStatus;

  constructor(bookingId: string, amenityId: string, tenantId: string) {
    this.amenityId = amenityId;
    this.bookingId = bookingId;
    this.status = 'pending';
    this.tenantId = tenantId;
    this.startTime = new Date();
    this.endTime = new Date();
  }

  get getTenantId(): string {
    return this.tenantId;
  }

  get getBookingId(): string {
    return this.bookingId;
  }

  get getAmenityId(): string {
    return this.amenityId;
  }

  set ChangeStatus(status: BookingStatus) {
    this.status = status || 'pending';
  }

  getBookingDurationInMinutes() {
    if (!this.startTime || !this.endTime) {
      return 0;
    }

    const durationMs = this.endTime.getTime() - this.startTime.getTime();
    return Math.floor(durationMs / (1000 * 60)); // Convert to minutes
  }

  getBookingDurationInHours() {
    return this.getBookingDurationInMinutes() / 60;
  }
}
