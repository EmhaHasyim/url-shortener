import { Hono } from 'hono'
import { RegExpRouter } from 'hono/router/reg-exp-router'
import indexRoute from './routes/indexRoutes'
import { HTTPException } from 'hono/http-exception'
import { ZodError } from 'zod'

const app = new Hono({ router: new RegExpRouter() })

app.route('', indexRoute)
app.onError(async (err, c) => {
    if (err instanceof HTTPException) {
        c.status(err.status)
        return c.json({
            errors: {
                message: err.message
            }
        })
    } else if (err instanceof ZodError) {
        c.status(400)
        return c.json({
            errors: {
                message: err.message
            }
        })
    } else {
        c.status(500)
        return c.json({
            errors: {
                message: err.message
            }
        })
    }
})

export default app