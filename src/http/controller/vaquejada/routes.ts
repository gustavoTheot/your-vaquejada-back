import { FastifyInstance } from "fastify";
import { listVaquejada } from "./list";
import { createVaquejada } from "./create";
import { middleAutheticate } from "../../middlewares/middlewareAuthenticate";
import { updateVaqueja } from "./update";

export async function vaquejadaRoutes(app: FastifyInstance){
    app.post('/vaquejada', {onRequest: [middleAutheticate]}, createVaquejada)
    app.get('/vaquejada', {onRequest: [middleAutheticate]}, listVaquejada)

    app.put('/vaquejada', updateVaqueja)


} 