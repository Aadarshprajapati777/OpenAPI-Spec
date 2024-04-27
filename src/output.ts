import {z} from '@hono/zod-openapi';


//output from the route

export const UserSchema= z.object({
    name: z.string().min(1).max(10).openapi({
      example:"John"
    }),
    age: z.number().int().openapi({
      example: 20
    }),
    id: z.string().min(1).max(10).openapi({
      example:"123"
    })
  })
  