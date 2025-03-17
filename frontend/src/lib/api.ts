import { AppType } from '@server/index'
import { hc } from 'hono/client'

const client = hc<AppType>('/')

const api = client.api

export default api