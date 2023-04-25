import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { AuthenticateManagerUseCase } from "../../../useCases/authenticate";

export async function authenticateManager(request: FastifyRequest, response: FastifyReply){
    const authenticateManagerBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
    })

    const {email, password} = authenticateManagerBodySchema.parse(request.body)

    try{
        const authenticateManagerUseCase = new AuthenticateManagerUseCase()

        const user = await authenticateManagerUseCase.execute({
            email, 
            password
        })

        // gerando token
        const token = await response.jwtSign({}, {
            sign: {
                sub: user.userAlreadyExists.id,
                expiresIn: '1d'
            },
        })

        return response.status(200).send({token})

    }catch(err){
        if(err instanceof Error){
            return response.status(400).send({message: err.message})
        }

        throw err
    }
    
}

/*
         const refreshToken = await response.jwtSign({
            role: user.userAlreadyExists.role
        },{
            sign: {
                sub: user.userAlreadyExists.id,
                expiresIn: "5s"
            }
        })

        return response.setCookie('refreshToken', refreshToken, {
            path: '/',
            secure: true,
            sameSite: true,
            httpOnly: true
        }).status(200).send({token})
        */