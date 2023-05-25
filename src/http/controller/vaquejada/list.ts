import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'

export async function listVaquejada(request: FastifyRequest, response: FastifyReply){
    const manager_id = request.user.sub

    const data= await knex('vaquejada').select('*').where('manager_id', manager_id).select('*')
    
    return response.status(200).send(data)

}