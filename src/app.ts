import fastify from "fastify";
import { managerRoutes } from "./http/controller/manager/routes";
import { vaqueiroRoutes } from "./http/controller/vaqueiro/routes";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import { admRoutes } from "./http/controller/adm/routes";
import { vaquejadaRoutes } from "./http/controller/vaquejada/routes";

export const app = fastify()
app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
})

app.register(managerRoutes)
app.register(vaqueiroRoutes)
app.register(admRoutes)
app.register(vaquejadaRoutes)

