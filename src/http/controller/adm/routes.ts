import { FastifyInstance } from "fastify";
import { createAdminstrator } from "./create";
import { listAdm } from "./list";
import { authenticateADM } from "./authenticate";

export async function admRoutes(app: FastifyInstance){
    app.post('/adm', createAdminstrator)
    app.get('/adm', listAdm)
    app.post('/login/adm', authenticateADM)

} 