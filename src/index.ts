import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { ParmsSchema } from "./input";
import { UserSchema } from "./output";

const app = new OpenAPIHono()

const getUserRoute = createRoute({
  method: 'get',
  path: 'user/{id}',
  request: {
    params: ParmsSchema
  },
  responses:{
    200: {
      content:{
        'application/json':{
          schema: UserSchema
        }
      },
      description: 'User found'
    }

  }
})



app.openapi(getUserRoute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})

export default app