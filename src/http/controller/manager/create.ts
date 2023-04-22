import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { knex } from "../../../database";
import { hash } from 'bcrypt'
import { randomUUID } from "crypto";
import { createManagerUseCase } from "../../../useCases/createUser";

export async function createManager(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        name: z.string(),
        phone: z.number(),
        cpf: z.string().min(11).max(11),
        email: z.string().email(),
        password: z.string(),
        cowboy_number: z.number(),
    })

    const {name, phone, cpf, email, password, cowboy_number} = createManagerBodySchema.parse(
        request.body
    )

    try{
        await createManagerUseCase({name, phone, cpf, email, password, cowboy_number})
    }catch(err){
        response.status(409).send()
    }

    return response.status(201).send()
    
}