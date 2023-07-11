import {FastifyRequest, FastifyReply} from 'fastify'
import { makeGetCowboysUseCase } from '../../../useCases/factore/make-get-cowboys-use-case'
import { knex } from '../../../database'

interface ListCowboyRouteParams{
    id: string
}

export async function listCowboys(request: FastifyRequest<{ Params: ListCowboyRouteParams }>, response: FastifyReply){
    const vaquejadaId = parseInt(request.params.id);

    
    const listCowboys = makeGetCowboysUseCase()
    const execute = await listCowboys.getCowboys({vaquejada_id: vaquejadaId})
    const data = execute
    

    return response.status(201).send(data)
}