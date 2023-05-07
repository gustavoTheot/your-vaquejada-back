<<<<<<< HEAD
import { FastifyInstance } from "fastify";
import { deleteVaqueiro } from "./delete";

export async function vaqueiroRoutes(app: FastifyInstance){
    app.delete('/vaqueiro/id', deleteVaqueiro)
=======
import { FastifyInstance } from "fastify";

export async function vaqueiroRoutes(app: FastifyInstance){
    
>>>>>>> 9258a28bb7ec26fa0dcf37d5d37457e688187999
}