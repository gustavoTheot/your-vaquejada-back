import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../../database";
import { randomUUID } from "crypto";
import { hash } from "bcrypt";

export async function createAdminstrator(request: FastifyRequest, response: FastifyReply){
    const createAdministratorBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
    })

    const {name, email, password} = createAdministratorBodySchema.parse(request.body)

    const passwordHash = await hash(password, 6)

    await knex('administrator').insert({
        id: randomUUID(),
        name,
        email, 
        password: passwordHash
    })

    return response.status(201).send()
}
