import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { urlInsertSchema } from "../database/schema/url-schema";
import { insertUrlService, selectUrlService } from "../services/urlService";

const urlControler = new Hono()

urlControler.get('/:shortUrl', async (c) => {
    const param = c.req.param('shortUrl')

    const originalUrl = await selectUrlService(param)

    return c.redirect(originalUrl, 301);
})

urlControler.post('api/url', zValidator('json', urlInsertSchema), async (c) => {
    const urlData = c.req.valid('json')
    const insertUrl = await insertUrlService(urlData)
    return c.json(insertUrl, 201)
})

export default urlControler