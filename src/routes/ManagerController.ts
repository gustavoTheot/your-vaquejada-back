import { FastifyInstance } from "fastify";
import z from 'zod'
import { knex } from "../database";

export async function maganerControllerRoutes(app: FastifyInstance) {
    app.get('/manager', async(request, response) => {
        const managers = await knex('manager').select('*')

        return managers;
    })


    app.post('/manager', async(request, response) => {
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
    })

    
}