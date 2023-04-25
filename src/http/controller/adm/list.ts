import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'

export async function listAdm(request: FastifyRequest, response: FastifyReply){
    const data = await knex('administrator').select('*')

    return response.status(201).send(data)
}