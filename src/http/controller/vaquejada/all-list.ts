import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'

export async function allListVaquejada(request: FastifyRequest, response: FastifyReply){
    const data = await knex('vaquejada').select('*')
    return response.status(200).send(data)

}