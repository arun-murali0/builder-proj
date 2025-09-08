export class Property {
  private readonly id?: string;
  private readonly ownerId: string;

  public name: string;
  public type: string;
  public address: string;
  public city: string;
  public state: string;
  public country: string;
  public status: string;
  public createdAt?: Date;

  constructor(params: {
    id?: string;
    name: string;
    type: string;
    address: string;
    city: string;
    state: string;
    country: string;
    ownerId: string;
    status?: string;
    createdAt?: Date;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.type = params.type;
    this.address = params.address;
    this.city = params.city;
    this.state = params.state;
    this.country = params.country;
    this.ownerId = params.ownerId;
    this.status = params.status ?? 'active';
    this.createdAt = params.createdAt ?? new Date();
  }

  getId(): string {
    if (!this.id) throw new Error('Property id not found');
    return this.id;
  }

  getOwnerId(): string {
    return this.ownerId;
  }
}
