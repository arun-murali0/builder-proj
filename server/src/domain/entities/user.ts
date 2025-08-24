type UserRole = "user" | "admin";

export class UserEntity {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public role: UserRole;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: {
    id: string;
    name: string;
    email: string;
    password: string;
    role?: UserRole;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.role = props.role || "user";
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }

  // Business rule: check if user is admin
  isAdmin(): boolean {
    return this.role === "admin";
  }

  // Example: update password with validation
  updatePassword(newPassword: string) {
    if (newPassword.length < 8) {
      throw new Error("Password too short");
    }
    this.password = newPassword;
    this.updatedAt = new Date();
  }
}
