import bcrypt from 'bcrypt';

export const hashPassword = (password: string): string => {
  const saltRounds = 10;
  const hash = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, hash);
};

export const comparePassword = (password: string, hashedPassword: string): boolean => {
  const isValid = bcrypt.compareSync(password, hashedPassword);
  return isValid;
};
