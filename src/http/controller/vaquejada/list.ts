import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'

export async function listVaquejada(request: FastifyRequest, response: FastifyReply){
    const manager_id = request.user.sub

    const data = await knex('vaquejada').select('*').where('manager_id', manager_id)
    
    const vaquejadaWithPhases = []


    for(const vaquejada of data){
        const phases = await knex('phase').select('*').where('vaquejada_id', vaquejada.id)
        vaquejada.phase = phases
        vaquejadaWithPhases.push(vaquejada)
    }
    

    return response.status(200).send({data: vaquejadaWithPhases})

}