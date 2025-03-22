import { Hono } from 'hono'
import { RegExpRouter } from 'hono/router/reg-exp-router'
import indexRoute from './routes/indexRoutes'
import { HTTPException } from 'hono/http-exception'
import { ZodError } from 'zod'
import { serveStatic } from 'hono/bun'
import { SQLiteError } from "bun:sqlite";

const app = new Hono({ router: new RegExpRouter() })
const appRoute = app.route('', indexRoute)
app.use('/*', serveStatic({ root: '/dist' }))
app.use('/*', serveStatic({ path: '/dist/index.html' }))
app.onError(async (err, c) => {
    if (err instanceof HTTPException) {
        c.status(err.status)
        if (err.message === 'Url tidak Ditemukan') {
            return c.redirect('http://localhost:3000')
        }
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
    } else if (err instanceof SQLiteError) {
        c.status(400)
        return c.json({
            erros: {
                name: err.name,
                message: err.message
            }
        })
    }
    else {
        c.status(500)
        return c.json({
            errors: {
                message: err.message
            }
        })
    }
})

export default app
export type AppType = typeof appRoute