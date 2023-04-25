import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'

export async function listVaquejada(request: FastifyRequest, response: FastifyReply){
    const data = await knex('vaquejada').select('*')

    return response.status(201).send(data)
}