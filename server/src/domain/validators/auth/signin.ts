import z from "zod";

export const signinSchema = z.object({
  id: z.uuidv4().optional(),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    ),
  role: z.enum(["user", "admin"]).optional(),
});

export type SignInInput = z.infer<typeof signinSchema>;
