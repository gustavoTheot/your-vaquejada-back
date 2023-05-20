import { FastifyRequest, FastifyReply } from "fastify";
import z from 'zod'
import { makeRegisterManagerUseCase } from "../../../useCases/factore/make-register-manager-use-case";

export async function createManager(request: FastifyRequest, response: FastifyReply) {
    const createManagerBodySchema = z.object({
        name: z.string(),
        phone: z.number(),
        cpf: z.string().min(11).max(11),
        email: z.string().email(),
        password: z.string(),
        cowboy_number: z.number().default(50),
        adm_id: z.string().default('')
    })

    const {name, phone, cpf, email, password, cowboy_number, adm_id} = createManagerBodySchema.parse(
        request.body
    )

    try{
        const createManagerUSeCase = makeRegisterManagerUseCase()
        await createManagerUSeCase.execute(
            {
                name,
                phone,
                cpf,
                email,
                password,
                cowboy_number,
                adm_id
            }
        )

    }catch(error){
        if(error instanceof Error)
        return response.status(400).send({error: error.message})
    }

    return response.status(201).send({message: 'Successfully created manager'})
    
}