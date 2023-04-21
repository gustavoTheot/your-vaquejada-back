import fastify from "fastify";
import { managerRoutes } from "./http/controller/manager/routes";
import { admRoutes } from "./http/controller/adm/routes";
import { vaqueiroRoutes } from "./http/controller/vaqueiro/routes";

export const app = fastify()
app.register(managerRoutes)
app.register(vaqueiroRoutes)