import {FastifyRequest, FastifyReply} from 'fastify'
import { makeGetCowboysUseCase } from '../../../useCases/factore/make-get-cowboys-use-case'

export async function listCowboys(request: FastifyRequest<{Params: {id: number}}>, response: FastifyReply){
    const vaquejadaId = request.params.id

    const listCowboys = makeGetCowboysUseCase()
    const execute = await listCowboys.getCowboys({vaquejada_id: vaquejadaId})
    const data = execute

    return response.status(201).send(data)
}