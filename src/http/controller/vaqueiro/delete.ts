import { FastifyReply, FastifyRequest } from "fastify";
import { KnexVaqueiroRepository } from "../../../repository/knex/knex-vaqueiro-repository";
import { DeleteVaqueiroUseCase } from "../../../useCases/deleteVaqueiro";

interface Vaqueiro{
    id: string
}

export function deleteVaqueiro(request: FastifyRequest, response: FastifyReply){
    const {id} = request.params

    try{
        const vaqueiroRepository = new KnexVaqueiroRepository()
        const deleteVaqueiroUseCase = new DeleteVaqueiroUseCase(vaqueiroRepository)

        deleteVaqueiroUseCase.execute(id)
    }catch(error){
        console.log(error)
    }

    return response.status(200).send()

}