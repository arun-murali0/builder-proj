// const MAX_NAME_LENGTH = 50;
// const MIN_NAME_LENGTH = 3;
const PASSWORD_MIN_LENGTH = 8;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// domain/Email.ts
export class Email {
  constructor(private readonly value: string) {
    if (!EMAIL_REGEX) throw new Error('Invalid email format');
  }

  getValue(): string {
    return this.value;
  }

  isValid(other: Email): boolean {
    return this.value === other.value;
  }
}

// domain/Password.ts
export class Password {
  constructor(private readonly value: string) {
    if (value.length < PASSWORD_MIN_LENGTH)
      throw new Error('Password must be at least 8 characters');
  }

  getValue(): string {
    return this.value;
  }

  isValid(other: Password): boolean {
    return this.value === other.value;
  }
}
