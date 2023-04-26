import { FastifyReply, FastifyRequest } from "fastify";
import { knex } from "../../../database";

export async function profile(request: FastifyRequest, response: FastifyReply){
    await request.jwtVerify()

    const idUserProfile = request.user.sub

    const profile = await knex('manager').where('id', idUserProfile).select('*').first() 

    return response.status(200).send({
        profile
    })
    
}