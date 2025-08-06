import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'zod'

export class RegisterArgs extends createZodDto(
  z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  }),
) { }

export class LoginArgs extends createZodDto(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
) { }

patchNestJsSwagger()
