import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../../database";

export async function creations(request: FastifyRequest, response: FastifyReply){
    const data = await knex('vaquejada')
    .join('manager', 'manager.id', '=', 'vaquejada.manager_id')
    .select([
        'vaquejada.title',
        'vaquejada.date_create',
        'manager.name',
        'manager.cowboy_number'
    ])

    return response.status(201).send({data})
}