import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'

export async function updateManager(request: FastifyRequest, response: FastifyReply){
    const data = await knex('manager').select('*')

    return response.status(201).send(data)
}