import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { createManagerUseCase } from "../../../useCases/createUser";
import { knex } from "../../../database";
import { error } from "console";
import { createVaquejadaUeCase } from "../../../useCases/createVaquejada";

export async function createVaquejada(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        title: z.string(),
        manager_id: z.string(),
    })

    const {title, manager_id} = createManagerBodySchema.parse(
        request.body
    )

   try{
    await createVaquejadaUeCase({title, manager_id})
   }catch(err){
        return response.status(400).send({message: 'Error in create vaquejada'})
   }

    return response.status(201).send()
    
}