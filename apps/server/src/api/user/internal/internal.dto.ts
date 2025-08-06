import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'zod'

export class UpdateUserArgs extends createZodDto(
  z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  }),
) { }

export class UpdatePasswordArgs extends createZodDto(
  z.object({
    oldpassword: z.string().min(8),
    newPassword: z.string().min(8),
  }),
) { }

patchNestJsSwagger()
