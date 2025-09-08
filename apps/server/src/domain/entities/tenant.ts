export class Tenant {
  private readonly id?: string;
  private readonly userId: string;
  private readonly unitId: string;

  public moveInDate: Date;
  public moveOutDate?: Date;

  constructor(params: {
    id?: string;
    userId: string;
    unitId: string;
    moveInDate: Date;
    moveOutDate?: Date;
  }) {
    this.id = params.id;
    this.userId = params.userId;
    this.unitId = params.unitId;
    this.moveInDate = params.moveInDate;
    this.moveOutDate = params.moveOutDate;
  }

  getId(): string {
    if (!this.id) throw new Error('Tenant id not found');
    return this.id;
  }

  getUserId(): string {
    return this.userId;
  }

  getUnitId(): string {
    return this.unitId;
  }
}
