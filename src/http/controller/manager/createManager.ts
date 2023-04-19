import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { knex } from "../../../database";

export async function createManager(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        name: z.string(),
        cpf: z.string(),
        email: z.string(),
        password: z.string(),
        amount: z.number(),
    })

    const {name, cpf, email, password, amount} = createManagerBodySchema.parse(
        request.body
    )

    await knex('manager').insert({
        data: {
            name, 
            cpf, 
            email, 
            password, 
            amount
        }
    })

    return response.status(201).send()
    
}