import { FastifyInstance } from "fastify";
import { listVaquejada } from "./list";
import { createVaquejada } from "./create";
import { middleAutheticate } from "../../middlewares/middlewareAuthenticate";
import { updateVaquejada } from "./update";
import { deleteVaquejada } from "./delete";
import { allListVaquejada } from "./all-list";

export async function vaquejadaRoutes(app: FastifyInstance){
    app.post('/vaquejada', {onRequest: [middleAutheticate]}, createVaquejada)
    app.get('/vaquejada', {onRequest: [middleAutheticate]}, listVaquejada)
    app.get('/all-vaquejada', allListVaquejada)


    app.put('/vaquejada/:id', updateVaquejada)
    app.delete('/vaquejada/:id', deleteVaquejada)



} 