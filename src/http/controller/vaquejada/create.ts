import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { makeRegisterVaquejadaUseCase } from "../../../useCases/factore/make-register-vaquejada-use-case";

export async function createVaquejada(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        title: z.string(),
        local: z.string(),
        date: z.string(),
        time_start: z.number(),
        premium: z.string(),
        amount_teams: z.number().default(0),
        races_by_stage: z.number(),
        phases: z.number(),
    })

    const {title, local, date, time_start, premium, amount_teams, races_by_stage, phases} = createManagerBodySchema.parse(
        request.body
    )
        
    try{
        const createVaquejadaUseCase = makeRegisterVaquejadaUseCase()
        await createVaquejadaUseCase.execute(
            {
                title, 
                local, 
                date, 
                time_start, 
                premium,
                amount_teams,
                races_by_stage,
                phases,
                manager_id: request.user.sub
            })

    }catch(error){
        if(error instanceof Error)
        return response.status(400).send({error: error.message})
    }

    return response.status(201).send({message: 'Success'})
    
}