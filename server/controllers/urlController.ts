import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { urlInsertSchema } from "../database/schema/url-schema";
import { insertUrlService, selectUrlService } from "../services/urlService";
import { cache } from 'hono/cache'

const urlControler = new Hono()
    .get('/:shortUrl', cache({
        cacheName: 'shortUrl',
        cacheControl: 'max-age=600',
    }), async (c) => {
        const param = c.req.param('shortUrl')
        const originalUrl = await selectUrlService(param)
        return c.redirect(originalUrl, 301);
    })
    .post('/api/url', zValidator('json', urlInsertSchema), async (c) => {
        const urlData = c.req.valid('json')
        const insertUrl = await insertUrlService(urlData)
        return c.json(insertUrl, 201)
    })

export default urlControler