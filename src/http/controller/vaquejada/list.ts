import {FastifyRequest, FastifyReply} from 'fastify'
import { knex } from '../../../database'
import { makeGetVaquejadaUseCase } from '../../../useCases/factore/make-get-vaquejada-use-case'

export async function listVaquejada(request: FastifyRequest, response: FastifyReply){
    await request.jwtVerify()
    const manager_id = request.user.sub
    
    const vaquejadaRepository = makeGetVaquejadaUseCase()
    const vaquejadaResult = await vaquejadaRepository.execute({ manager_id });
    const data = vaquejadaResult.vaquejada

    const vaquejadaWithPhases = []


    for (const vaquejada of data) {
        const dataPhase = await knex('phase').select('*').where('vaquejada_id', vaquejada.id)
        for(const phase of dataPhase){
            const passwords = await knex('passwords').select('password_cowboy').where('phase_id', phase.id)

            phase.password_cowboy = passwords
        }
    
        vaquejada.phases = dataPhase;
        vaquejadaWithPhases.push(vaquejada);
    }

    return response.status(200).send({Vaquejada: vaquejadaWithPhases})
}
