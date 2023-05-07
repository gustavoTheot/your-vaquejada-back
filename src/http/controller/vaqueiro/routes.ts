import { FastifyInstance } from "fastify";
import { deleteVaqueiro } from "./delete";

export async function vaqueiroRoutes(app: FastifyInstance){
    app.delete('/vaqueiro/id', deleteVaqueiro)
}
