import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'

export async function listVaqueiro(request: FastifyRequest, response: FastifyReply){
    const data = await knex('cowboy').select('*')

    return response.status(201).send(data)
}