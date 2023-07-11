import { FastifyRequest, FastifyReply } from "fastify";
import { makeUpdateVaquejadaUseCase } from "../../../useCases/factore/make-update-vaquejada-user-case copy";
import z from 'zod'


export async function updateVaquejada(request: FastifyRequest <{Params: {id: number}}>, response: FastifyReply) {
    const updateVaquejadaBodySchema = z.object({
        title: z.string().optional(),
        local: z.string().optional(),
        date: z.string().optional(),
        time_start: z.number().optional(),
        premium: z.string().optional(),
        amount_teams: z.number().optional(),
    })


    const {id} = request.params

    try{
        const {title,
            local,
            date,
            time_start,
            premium,
            amount_teams} = updateVaquejadaBodySchema.parse(request.body)

        const vaquejadaRepository = makeUpdateVaquejadaUseCase()
        await vaquejadaRepository.update({
            id: id, 
            title,
            local,
            date,
            time_start,
            premium,
            amount_teams,
           })

        return response.status(201).send({message: 'Success'})
    }catch(error){
        if(error instanceof z.ZodError){
            return response.status(401).send({error: error.message})
        }

        return response.status(500).send({error: 'Internal Server Error'})
    }
    
}