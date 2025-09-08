import { Email, Password } from '../value-objects/userEntityObject';
import { Role, UserStatus } from '../types';

export class User {
  private readonly id?: string;
  private readonly email: Email;
  protected password: Password;
  protected mobileNumber: string;

  public firstName: string;
  public lastName: string;
  public role: Role;
  public status: UserStatus;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(params: {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    role?: Role;
    status?: UserStatus;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = params.id;
    this.email = new Email(params.email);
    this.password = new Password(params.password);
    this.mobileNumber = params.mobileNumber;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.role = params.role ?? 'USER';
    this.status = params.status ?? 'ACTIVE';
    this.createdAt = params.createdAt ?? new Date();
    this.updatedAt = params.updatedAt ?? new Date();
  }

  getId(): string {
    if (!this.id) throw new Error('Id not found');
    return this.id;
  }

  getEmail(): string {
    return this.email.getValue();
  }

  get mobileNum(): string {
    return this.mobileNumber;
  }

  getPasswordHash(): string {
    return this.password.getValue();
  }
}
