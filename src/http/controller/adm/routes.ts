import { FastifyInstance } from "fastify";
import { createAdminstrator } from "./create";
import { listAdm } from "./list";

export async function admRoutes(app: FastifyInstance){
    app.post('/adm', createAdminstrator)
    app.get('/adm', listAdm)

} 