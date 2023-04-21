import {FastifyInstance} from 'fastify'
import { createManager } from './create'
import { listManagers } from './list'

export async function managerRoutes(app: FastifyInstance){
    app.post("/manager", createManager)
    app.get("/manager", listManagers)
}