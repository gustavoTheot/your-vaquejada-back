import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { knex } from "../../../database";
import { criarvaqueiroUseCase } from "../../../useCases/criarvaqueiro";

export async function createCowboy(request: FastifyRequest, response: FastifyReply) {
    const criarVaqueiroBodySchema = z.object({
        name: z.string(),
        cpfv1: z.string().min(11).max(11),
        horse_name: z.string(),
        treadmill: z.string(),
        cpftread: z.string().min(11).max(11),
        tread_horse: z.string()
    })

    const {name, cpfv1, horse_name, treadmill, tread_horse, cpftread} = criarVaqueiroBodySchema.parse(
        request.body
    )

    try{
        await criarvaqueiroUseCase({name, cpfv1, horse_name, treadmill, tread_horse, cpftread})

    }catch(error){
        if(error instanceof Error)
        return response.status(400).send({error: error.message})
    }

    return response.status(201).send({message: 'Vaqueiro e Bate-esteira criados!'})
    
}