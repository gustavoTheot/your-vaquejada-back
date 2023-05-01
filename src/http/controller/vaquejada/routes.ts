import { FastifyInstance } from "fastify";
import { listVaquejada } from "./list";
import { createVaquejada } from "./create";
import { middleAutheticate } from "../../middlewares/middlewareAuthenticate";

export async function vaquejadaRoutes(app: FastifyInstance){
    app.post('/vaquejada', {onRequest: [middleAutheticate]}, createVaquejada)
    app.get('/vaquejada', {onRequest: [middleAutheticate]}, listVaquejada)

} 