import { z } from 'zod';

export const geoSchema = z.object({
  lat: z.string(),
  lng: z.string(),
});

export const addressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: geoSchema,
});

export const companySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().trim().min(2, {
    message: 'Min lenght for name is 2',
  }),
  username: z.string().trim().toLowerCase(),
  email: z
    .string()
    .email({
      message: 'Please give a valid email',
    })
    .trim()
    .toLowerCase(),
  address: addressSchema.optional(),
  phone: z.string().min(10, {
    message: 'Phone numbers are a minimum of 10 digits',
  }),
  website: z.string().optional(),
  company: companySchema.optional(),
});

export type User = z.infer<typeof UserSchema>;
