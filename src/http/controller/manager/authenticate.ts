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

        // gerando token que fica disponível para todos visualizarem
        const token = await response.jwtSign({
            role: user.userAlreadyExists.role
        }, {
            sign: {
                sub: user.userAlreadyExists.id,
                expiresIn: '30s'
            },
        })

        // token "secreto" 
        const refreshToken = await response.jwtSign({
            role: user.userAlreadyExists.role
        },{
            sign: {
                sub: user.userAlreadyExists.id,
                expiresIn: "2d",
            }
        })

        return response.setCookie('refreshToken', refreshToken, {
            path: '/', // quais rotas vão ter acesso
            secure: true, // está utilizando https?
            sameSite: true, // só é acessivel dentro do mesmo dominio
            httpOnly: true // acessado pelo back e n pelo front
        }).status(200).send({token})
        

    }catch(err){
        if(err instanceof Error){
            return response.status(400).send({message: err.message})
        }

        throw err
    }
    
}