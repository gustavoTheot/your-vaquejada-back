import fastify from "fastify";
import { appRouter } from "./http/controller/manager/routes";

export const app = fastify()
app.register(appRouter)