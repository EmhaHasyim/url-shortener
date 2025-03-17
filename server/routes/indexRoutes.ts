import { Hono } from "hono";
import urlControler from "../controllers/urlController";

const indexRoute = new Hono()
    .route('', urlControler)

export default indexRoute