import { eq } from "drizzle-orm"
import { db } from "../database/db"
import { urls, type urlInsertType } from "../database/schema/url-schema"
import { HTTPException } from "hono/http-exception"


const selectUrlService = async (shortUrl: string) => {
    const selectUrl = await db.select().from(urls).where(eq(urls.shortUrl, shortUrl)).limit(1)
    if (!selectUrl[0]) {
        throw new HTTPException(404, { message: 'Url tidak Ditemukan' })
    }
    return selectUrl[0].originalUrl
}

const insertUrlService = async (urlData: urlInsertType) => {
    const { shortUrl, originalUrl } = urlData
    const insertUrl = await db.insert(urls).values({ shortUrl: shortUrl, originalUrl }).returning()
    return insertUrl[0]
}

export { insertUrlService, selectUrlService }