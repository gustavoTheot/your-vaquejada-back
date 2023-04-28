import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from '@fastify/cookie'
import { managerRoutes } from "./http/controller/manager/routes";
import { vaqueiroRoutes } from "./http/controller/vaqueiro/routes";
import { env } from "./env";
import { admRoutes } from "./http/controller/adm/routes";
import { vaquejadaRoutes } from "./http/controller/vaquejada/routes";

export const app = fastify()
app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
        cookieName: 'refreshToken',
        signed: false,
    },
    sign: {
        expiresIn: '10m'
    }
})
app.register(fastifyCookie)


app.register(managerRoutes)
app.register(vaqueiroRoutes)
app.register(admRoutes)
app.register(vaquejadaRoutes)

