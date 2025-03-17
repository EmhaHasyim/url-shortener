import { Hono } from "hono";
import urlControler from "../controllers/urlController";
import { RegExpRouter } from "hono/router/reg-exp-router";

const indexRoute = new Hono({router: new RegExpRouter})

indexRoute.route('', urlControler)

export default indexRoute