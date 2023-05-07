import { FastifyReply, FastifyRequest } from "fastify";
import { KnexVaqueiroRepository } from "../../../repository/knex/knex-vaqueiro-repository";
import { DeleteVaqueiroUseCase } from "../../../useCases/deleteVaqueiro";


export function deleteVaqueiro(request: FastifyRequest, response: FastifyReply){
    const {id} = request.params.id

    try{
        const vaqueiroRepository = new KnexVaqueiroRepository()
        const deleteVaqueiroUseCase = new DeleteVaqueiroUseCase(vaqueiroRepository)

        deleteVaqueiroUseCase.execute({id})
    }catch(error){
        return response.status(404).send({error: error.message})
    }

    return response.status(200).send()

}