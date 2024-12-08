

import { Schema, z, ZodSchema } from "zod";

//const profileSchema = z.string().min(2)

export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "ชื่อต้องมากกว่า 2 ตัวอักษรขึ้นไป" }),
  lastName: z.string().min(2, { message: "นามสกุลต้องมากกว่า2 ตัวอักษรขึ้นไป" }),
  userName: z.string().min(2, { message: "ชื่อต้องมากกว่า2 ตัวอักษรขึ้นไป" }),
});




export const ValidateWithZod = <T>(schema: ZodSchema<T>, data:unknown):T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }
  return result.data;
};