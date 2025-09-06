import { Email, Password } from '@/domain/value-objects/userEntityObject';
import { Role } from '@/domain/types';

export class User {
  private readonly id?: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public role: Role = 'USER';
  protected password: string;
  protected mobileNumber: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(params: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
  }) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.email = params.email;
    this.password = params.password;
    this.mobileNumber = params.mobileNumber;
  }

  getId(): string {
    if (!this.id) throw new Error('Id not found');
    return this.id;
  }

  getEmail(): string {
    const email = new Email(this.email);
    if (!email.isValid(email)) {
      throw new Error('Invalid email format');
    }
    return email.getValue();
  }

  get mobileNum(): string {
    return this.mobileNumber;
  }

  checkPassword(password: string): boolean {
    const isValid = new Password(this.password).isValid(new Password(password));
    return isValid;
  }

  get getPassword(): string {
    const isValid = new Password(this.password);
    if (!isValid) {
      throw new Error('password is invalid ');
    }
    return isValid.getValue();
  }
}
