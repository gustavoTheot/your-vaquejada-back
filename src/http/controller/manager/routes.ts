import {FastifyInstance} from 'fastify'
import { createManager } from './create'
import { listManagers } from './list'
import { authenticateManager } from './authenticate'
import { middleAutheticate } from '../../middlewares/middlewareAuthenticate'
import { profile } from './profile'
import { refresh } from './refresh'
import { creations } from './creations'

export async function managerRoutes(app: FastifyInstance){
    app.post("/manager", createManager)
    app.get("/manager",listManagers)

    app.post('/login', authenticateManager)

    app.patch('/token/refresh', refresh)

    app.get('/me', {onRequest: [middleAutheticate]} ,profile)

    app.get('/me/creations', creations)


    
}