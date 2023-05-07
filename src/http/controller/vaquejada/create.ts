import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { CreateVaquejadaUeCase } from "../../../useCases/createVaquejada";

interface  CustomerError{
    message: string,
    code: number
}

export async function createVaquejada(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        title: z.string(),
        local: z.string(),
        date: z.string(),
        time_start: z.number(),
        award: z.string(),
        amount_times: z.number().default(0)
    })

    const {title, local, date, time_start, award, amount_times} = createManagerBodySchema.parse(
        request.body
    )
        
    try{
        const createVaquejadaUseCase = new CreateVaquejadaUeCase()
        await createVaquejadaUseCase.create(
            {
                title, 
                local, 
                date, 
                time_start, 
                award, 
                amount_times,
                manager_id: request.user.sub})

    }catch(error){
        if(error instanceof Error)
        return response.status(400).send({error: error.message})
    }

    return response.status(201).send({message: 'Success'})
    
}