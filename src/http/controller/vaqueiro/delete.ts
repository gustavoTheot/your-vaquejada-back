import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { knex } from "../../../database";
import { deletevaqueiroUseCase } from "../../../useCases/deletevaqueiro";

export async function deleteCowboy(request: FastifyRequest, response: FastifyReply) {
    const deletevaqueiroBodySchema = z.object({
        name: z.string(),
        cpfv1: z.string().min(11).max(11),
        horse_name: z.string(),
        treadmill: z.string(),
        cpftread: z.string().min(11).max(11),
        tread_horse: z.string()
    })
 

    



    const {name, cpfv1, horse_name, treadmill, tread_horse, cpftread} = deletevaqueiroBodySchema.parse(
        request.body
    )

    try{
        await deletevaqueiroUseCase({name, cpfv1, horse_name, treadmill, tread_horse, cpftread})

    }catch(error){
        if(error instanceof Error)
        return response.status(400).send({error: error.message})
    }

    return response.status(201).send({message: 'Dados apagados com sucesso!'})
    
}