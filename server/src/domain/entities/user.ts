type userRole = "user" | "admin";
export type SafeUser = Omit<UserEntity, "password">;

export type UserEntity = {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: userRole;
  createdAt?: Date;
  updatedAt?: Date;
};

export const createUser = (
  props: Omit<UserEntity, "id" | "createdAt" | "updatedAt" | "role">,
): UserEntity => {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "user",
    ...props,
  };
};

export const sanitizeUser = (user: UserEntity): SafeUser => {
  const { password, ...sanitizedUser } = user;
  return sanitizedUser;
};

export const authenticateUser = (
  user: UserEntity,
  password: string,
): Boolean => {
  const checkPassword = user.password === password;
  return checkPassword;
};
