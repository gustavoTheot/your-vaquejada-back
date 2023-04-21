import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { knex } from "../../../database";
import { hash } from 'bcrypt'
import { randomUUID } from "crypto";

export async function createManager(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        name: z.string(),
        phone: z.number(),
        cpf: z.string().min(11).max(11),
        email: z.string(),
        password: z.string(),
        cowboy_number: z.number(),
    })

    const {name, phone, cpf, email, password, cowboy_number} = createManagerBodySchema.parse(
        request.body
    )

    const passwordHash = await hash(password, 6)

    await knex('manager').insert({
        id: randomUUID(),
        name: name, 
        phone: phone,
        cpf: cpf, 
        email: email, 
        password: passwordHash, 
        cowboy_number: cowboy_number
    })

    return response.status(201).send()
    
}