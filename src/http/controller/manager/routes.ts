import {FastifyInstance} from 'fastify'
import { createManager } from './createManager'

export function appRouter(app: FastifyInstance){
    app.post("/manager", createManager)
}