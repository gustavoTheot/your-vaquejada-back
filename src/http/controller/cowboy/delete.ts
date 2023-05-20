import { FastifyReply, FastifyRequest } from "fastify";
import { KnexCowboyRepository } from "../../../repository/knex/knex-cowboy-repository";
import { DeleteCowboyUseCase } from "../../../useCases/deleteCowboy";
import { makeDeleteCowboyUseCase } from "../../../useCases/factore/make-delete-cowboy-use-case";
import { UserDoesNotExist } from "../../../useCases/error/error-delete-manager";


export async function deleteVaqueiro(request: FastifyRequest<{Params: {id: number}}>, response: FastifyReply){
    const id = request.params.id

    try{
        const deleteCowboyUseCase = makeDeleteCowboyUseCase()
        await deleteCowboyUseCase.execute({
            id
        })

        response.status(204).send({message: `Success in delete cowboy ${id}`})
    }catch(error){
        console.error(error)
        if(error instanceof UserDoesNotExist)
        return response.status(404).send({error: error.message})
    }


}