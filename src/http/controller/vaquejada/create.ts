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
        manager_id: z.string(),
    })

    const {title, manager_id} = createManagerBodySchema.parse(
        request.body
    )
    

   try{
    const createVaquejadaUseCase = new CreateVaquejadaUeCase()
    await createVaquejadaUseCase.create({title, manager_id})

   }catch(error){
        if(error instanceof Error)
        return response.status(400).send({error: error.message})
   }

    return response.status(201).send({message: 'Success'})
    
}