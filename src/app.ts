import fastify from "fastify";
import { managerRoutes } from "./http/controller/manager/routes";
import { vaqueiroRoutes } from "./http/controller/vaqueiro/routes";
import { authRoutes } from "./http/controller/authenticate/routes";

export const app = fastify()
app.register(managerRoutes)
app.register(vaqueiroRoutes)
app.register(authRoutes)