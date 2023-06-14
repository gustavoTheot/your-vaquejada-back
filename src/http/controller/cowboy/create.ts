import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'

import { makeRegisterCowboyUseCase } from "../../../useCases/factore/make-register-cowboy-use-case";

interface CreateCowboyRouteParams{
    id: string
}

export async function createCowboy(request: FastifyRequest<{ Params: CreateCowboyRouteParams }>, response: FastifyReply){
    const CreateCowboyBodySchema = z.object({
        password: z.string(),
        boi_tv: z.boolean(),
        cowboy_name: z.string(),
        beats_treadmill: z.string(),
        horse: z.string(),
        horse_beats_treadmill: z.string(),
        advanced_password: z.boolean().default(false),
        cats_cut: z.boolean().default(false),
        return_cowboy: z.boolean().default(false),
        phase: z.number().default(1)
    })

    const {
        password, 
        boi_tv, 
        cowboy_name, 
        beats_treadmill, 
        horse, 
        horse_beats_treadmill, 
        advanced_password,
        cats_cut,
        return_cowboy, phase} = CreateCowboyBodySchema.parse(
        request.body
    )

    const vaquejadaId = parseInt(request.params.id);

    try{
        const createCowboy =  makeRegisterCowboyUseCase()
        createCowboy.create({
            password,
            boi_tv,
            cowboy_name,
            beats_treadmill,
            horse,
            horse_beats_treadmill,
            advanced_password,
            cats_cut,
            return_cowboy,
            phase,
            vaquejada_id: vaquejadaId,
            manager_id: request.user.sub
        })

        return response.status(201).send({message: 'Vaqueiro e Bate-esteira criados!'})
    }catch(error){
        if(error instanceof Error)
        return response.status(401).send({error: error.message})
    }    
}
