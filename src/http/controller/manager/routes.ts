import {FastifyInstance} from 'fastify'
import { createManager } from './createManager'
import { listManagers } from './listManager'
import { deleteManager } from './deleteManager'

export function appRouter(app: FastifyInstance){
    app.post("/manager", createManager)
    app.get("/manager", listManagers)
    app.delete("manager/:id", deleteManager)
}