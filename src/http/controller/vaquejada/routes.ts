import { FastifyInstance } from "fastify";
import { listVaquejada } from "./list";
import { createVaquejada } from "./create";

export async function vaquejadaRoutes(app: FastifyInstance){
    app.post('/vaquejada', createVaquejada)
    app.get('/vaquejada', listVaquejada)

} 