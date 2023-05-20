import { FastifyInstance } from "fastify";
import { deleteVaqueiro } from "./delete";
import { createCowboy } from "./create";
import { listVaqueiro } from "./list";

export async function vaqueiroRoutes(app: FastifyInstance){
    app.post('/vaquejada/:id', createCowboy)
    app.get('/vaquejadas', listVaqueiro)
    app.delete('/vaquejada/:id/vaqueiro/:id', deleteVaqueiro)
}
