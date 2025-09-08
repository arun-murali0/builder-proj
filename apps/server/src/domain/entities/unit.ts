export class Unit {
  private readonly id?: string;
  private readonly propertyId: string;

  public unitNumber: string;
  public floor: number;
  public areaSqft: number;
  public monthlyRent: number;
  public status: string;
  public createdAt?: Date;

  constructor(params: {
    id?: string;
    propertyId: string;
    unitNumber: string;
    floor: number;
    areaSqft: number;
    monthlyRent: number;
    status?: string;
    createdAt?: Date;
  }) {
    this.id = params.id;
    this.propertyId = params.propertyId;
    this.unitNumber = params.unitNumber;
    this.floor = params.floor;
    this.areaSqft = params.areaSqft;
    this.monthlyRent = params.monthlyRent;
    this.status = params.status ?? 'vacant';
    this.createdAt = params.createdAt ?? new Date();
  }

  getId(): string {
    if (!this.id) throw new Error('Unit id not found');
    return this.id;
  }

  getPropertyId(): string {
    return this.propertyId;
  }
}
