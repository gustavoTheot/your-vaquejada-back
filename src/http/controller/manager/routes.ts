import {FastifyInstance} from 'fastify'
import { createManager } from './create'
import { listManagers } from './list'
import { authenticateManager } from './authenticate'
import { middleAutheticate } from '../../middlewares/middlewareAuthenticate'
import { profile } from './profile'
import { refresh } from './refresh'
import { creations } from './creations'
import { deleteManager } from './delete'
import { updateManager } from './update'

export async function managerRoutes(app: FastifyInstance){
    app.post("/manager", createManager)
    app.get("/manager",listManagers)
    app.put("/manager/:id", updateManager)
    app.delete('/manager/:id', deleteManager)


    app.post('/login', authenticateManager)
    app.patch('/token/refresh', refresh)
    app.get('/profile', {onRequest: [middleAutheticate]} ,profile)
    app.get('/profile/creations', creations)




    
}