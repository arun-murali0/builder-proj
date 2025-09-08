import { z } from 'zod';

export const signUpSchema = z.object({
  body: z.object({
    firstName: z
      .string()
      .nonempty('first name is required')
      .min(3, 'first name must be at least 3 characters long'),
    lastName: z
      .string()
      .nonempty('last name is required')
      .min(3, 'first name must be at least 3 characters long'),
    email: z.email('Invalid email address'),
    password: z
      .string()
      .nonempty('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
    role: z.enum(['USER', 'ADMIN', 'SUPERADMIN']).optional(),
    mobileNumber: z.string().min(10, 'Mobile number must be at least 10 characters long'),
  }),
});

export type SignUpInput = z.infer<typeof signUpSchema>['body'];
