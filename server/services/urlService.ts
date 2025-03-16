import { eq } from "drizzle-orm"
import { db } from "../database/db"
import { urls, type urlInsertType } from "../database/schema/url-schema"


const selectUrlService = async (shortUrl: string) => {

    const selectUrl = await db.select().from(urls).where(eq(urls.shortUrl, shortUrl))
    return selectUrl[0].originalUrl
}

const insertUrlService = async (urlData: urlInsertType) => {
    const { shortUrl, originalUrl } = urlData
    const insertUrl = await db.insert(urls).values({ shortUrl: shortUrl, originalUrl }).returning()
    return insertUrl[0]
}

export { insertUrlService , selectUrlService}