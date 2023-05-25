import { FastifyReply, FastifyRequest } from "fastify";
import { makeDeleteVaquejadaUseCase } from "../../../useCases/factore/make-delete-vaquejada-use-case";
import { UserDoesNotExist } from "../../../useCases/error/error-delete-manager";

export async function deleteVaquejada(request: FastifyRequest<{Params: {id: number}}>, response: FastifyReply){
    const id = request.params.id

    try{
        const vaquejadaRepository = makeDeleteVaquejadaUseCase()
        await vaquejadaRepository.execute({
            id
        })
        response.status(204).send({message: `Success in delete vaquejada ${id}`})
    }catch(error){
        console.error(error)
        if(error instanceof UserDoesNotExist)
        return response.status(404).send({error: error.message})
    }

}
