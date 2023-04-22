import { FastifyReply, FastifyRequest } from "fastify";
import { AuthenticateManagerUseCase } from "../../../useCases/authenticate";
import { z } from "zod";

export async function authenticateManager(request: FastifyRequest, response: FastifyReply){
    const authenticateManagerBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
    })

    const {email, password} = authenticateManagerBodySchema.parse(request.body)

    const authenticateManagerUseCase = new  AuthenticateManagerUseCase()

    
    const token = await authenticateManagerUseCase.execute({
        email, 
        password
    })
    

    return response.status(201).send(token)

}