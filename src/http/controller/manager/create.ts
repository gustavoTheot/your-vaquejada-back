import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { CreateManagerUseCase } from "../../../useCases/createUser";

export async function createManager(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        name: z.string(),
        phone: z.number(),
        cpf: z.string().min(11).max(11),
        email: z.string().email(),
        password: z.string(),
        cowboy_number: z.number(),
        adm_id: z.string()
    })

    const {name, phone, cpf, email, password, cowboy_number, adm_id} = createManagerBodySchema.parse(
        request.body
    )

    try{
        const createManagerUseCase = new CreateManagerUseCase()
        await createManagerUseCase.create({name, phone, cpf, email, password, cowboy_number, adm_id})

    }catch(error){
        if(error instanceof Error)
        return response.status(400).send({error: error.message})
    }

    return response.status(201).send({message: 'Successfully created manager'})
    
}