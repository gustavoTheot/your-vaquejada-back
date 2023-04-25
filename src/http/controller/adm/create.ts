import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { knex } from "../../../database";
import { randomUUID } from "crypto";

export async function createAdminstrator(request: FastifyRequest, response: FastifyReply){
    const createAdministratorBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
    })

    const {name, email, password} = createAdministratorBodySchema.parse(request.body)

    await knex('administrator').insert({
        id: randomUUID(),
        name,
        email, 
        password
    })

    return response.status(201).send()
}
