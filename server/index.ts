import { Hono } from 'hono'
import indexRoute from './routes/indexRoutes'
import { HTTPException } from 'hono/http-exception'
import { ZodError } from 'zod'
import { serveStatic } from 'hono/bun'
import { SQLiteError } from "bun:sqlite";
import compress from 'hono-compress'
import { RegExpRouter } from "hono/router/reg-exp-router";
import { SmartRouter } from "hono/router/smart-router";
import { TrieRouter } from "hono/router/trie-router";
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'


const app = new Hono({ router: new SmartRouter({ routers: [new RegExpRouter(), new TrieRouter()] }) })
    .use('/api/url', cors())
app.use(compress())
app.use(logger())
app.use(prettyJSON())
app.use('/favicon.ico', serveStatic({ path: '/dist/favicon.ico' }))
const appRoute = app.route('/', indexRoute)
app.get('/*', serveStatic({
    root: './dist',
    rewriteRequestPath: (path) => path.endsWith('/') ? '/index.html' : path
}))
app.notFound(c => c.redirect('/'))
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
            errors: {
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