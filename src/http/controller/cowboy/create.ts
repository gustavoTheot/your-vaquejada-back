import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'

import { makeRegisterCowboyUseCase } from "../../../useCases/factore/make-register-cowboy-use-case";

export async function createCowboy(request: FastifyRequest<{Params: {id: number}}>, response: FastifyReply){
    const CreateCowboyBodySchema = z.object({
        password: z.string(),
        boi_tv: z.boolean(),
        cowboy_name: z.string(),
        beats_treadmill: z.string(),
        horse: z.string(),
        horse_beats_treadmill: z.string(),
        points: z.number(),
    })

    const {password, boi_tv, cowboy_name, beats_treadmill, horse, horse_beats_treadmill, points} = CreateCowboyBodySchema.parse(
        request.body
    )

    const vaquejadaId = request.params.id

    try{
        const createCowboy =  makeRegisterCowboyUseCase()
        createCowboy.create({
            password,
            boi_tv,
            cowboy_name,
            beats_treadmill,
            horse,
            horse_beats_treadmill,
            points,
            vaquejada_id: vaquejadaId
        })

        return response.status(201).send({message: 'Vaqueiro e Bate-esteira criados!'})
    }catch(error){
        if(error instanceof Error)
        return response.status(401).send({error: error.message})
    }    
}
