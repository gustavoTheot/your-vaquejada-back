import { FastifyInstance } from "fastify";
import { createAdminstrator } from "./create";

export async function admRoutes(app: FastifyInstance){
    app.post('/adm', createAdminstrator)
} 