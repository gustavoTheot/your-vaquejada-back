import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'
import { makeGetVaquejadaUseCase } from '../../../useCases/factore/make-get-vaquejada-use-case'

export async function listVaquejada(request: FastifyRequest, response: FastifyReply){
    const manager_id = request.user.sub
    
    const vaquejadaWithPhases = []

    const vaquejadaRepository = makeGetVaquejadaUseCase()
    const vaquejadaResult = await vaquejadaRepository.execute({ manager_id });
    const data = vaquejadaResult.vaquejada
        
    for (const vaquejada of data) {
        
        const phases = await knex('phase').select('*').where('vaquejada_id', vaquejada.id);

        vaquejada.phases = phases
        vaquejadaWithPhases.push(vaquejada)
    }
    

    return response.status(200).send(data)
}