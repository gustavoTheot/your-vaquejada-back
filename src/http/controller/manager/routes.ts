import {FastifyInstance, FastifyReply, FastifyRequest} from 'fastify'
import { createManager } from './create'
import { listManagers } from './list'
import { authenticateManager } from './authenticate'
import { middleAutheticate } from '../../middlewares/middlewareAuthenticate'
import { profile } from './profile'
import { knex } from '../../../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'

export async function managerRoutes(app: FastifyInstance){
    app.post("/manager", createManager)
    app.get("/manager", listManagers)

    app.post('/login', authenticateManager)

    app.get('/me', {onRequest: [middleAutheticate]} ,profile)

    /*
    app.post('/vaquejada', {onRequest: [middleAutheticate]},async (request: FastifyRequest, response: FastifyReply) => {
        const createVaqueiroBodySchema = z.object({
            horseOne: z.string(),
            cowboy: z.string(),
            bateEsteira: z.string(),
            points: z.number(),
            manager_id: z.string(),
        })

        const {horseOne, cowboy, bateEsteira, points, manager_id } = createVaqueiroBodySchema.parse(request.body)

        await knex('vaqueiro').insert({
            horseOne: horseOne,
            cowboy: cowboy,
            bateEsteira: bateEsteira,
            points: points,
            id_vaqueiro: randomUUID(),
            manager_id: manager_id
        })

        return response.status(200).send('ok')
    })
    app.get('/vaquejada', async(request: FastifyRequest, response: FastifyReply) => {
        const result = await knex('vaqueiro')
        return response.status(200).send(result)
    })
    */
}