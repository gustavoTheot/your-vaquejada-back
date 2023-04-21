import { FastifyInstance } from "fastify";
import { createAdminstrator } from "./createAdm";

export async function admRoutes(app: FastifyInstance){
    app.post('/adm', createAdminstrator)
} 