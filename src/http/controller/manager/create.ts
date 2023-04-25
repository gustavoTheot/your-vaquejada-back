import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { createManagerUseCase } from "../../../useCases/createUser";

export async function createManager(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        name: z.string(),
        phone: z.number(),
        cpf: z.string().min(11).max(11),
        email: z.string().email(),
        password: z.string(),
        cowboy_number: z.number(),
        adm_id: z.string()
    })

    const {name, phone, cpf, email, password, cowboy_number, adm_id} = createManagerBodySchema.parse(
        request.body
    )

    try{
        await createManagerUseCase({name, phone, cpf, email, password, cowboy_number, adm_id})
    }catch(err){
        response.status(409).send()
    }

    return response.status(201).send()
    
}