import { FastifyReply, FastifyRequest } from "fastify";
import { UserDoesNotExist } from "../../../useCases/error/error-delete-manager";
import { makeDeleteManagerUseCase } from "../../../useCases/factore/make-delete-manager-use-case";


export async function deleteManager(request: FastifyRequest<{Params: {id: string}}>, response: FastifyReply){
    const id = request.params.id

    try{
        const deleteManagerUseCase = makeDeleteManagerUseCase()
        await deleteManagerUseCase.execute({
            id
        })

        response.status(204).send({message: `Success in delete manager ${id}`})
    }catch(error){
        console.error(error)
        if(error instanceof UserDoesNotExist)
        return response.status(404).send({error: error.message})
    }
}