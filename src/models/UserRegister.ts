import { z } from 'zod';

export const UserRegisterSchema = z.object({
  username: z.string().trim().toLowerCase().min(3, {
    message: 'Min length for username is 3',
  }),
  email: z.string().email({
    message: 'Please give a valid email',
  }),
  password: z.string().min(6, {
    message: 'Password min length is 8',
  }),
});

export type UserRegister = z.infer<typeof UserRegisterSchema>;
