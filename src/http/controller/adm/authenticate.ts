import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { AuthenticateADMUseCase } from "../../../useCases/authenticate_adm";

export async function authenticateADM(request: FastifyRequest, response: FastifyReply){
    const authenticateADMBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
    })

    const {email, password} = authenticateADMBodySchema.parse(request.body)

    try{
        const authenticateADMUseCase = new AuthenticateADMUseCase()

        const {userAlreadyExists} = await authenticateADMUseCase.execute({
            email, 
            password
        })

        // gerando token que fica disponível para todos visualizarem
        const token = await response.jwtSign({
            role: userAlreadyExists.role
        }, {
            sign: {
                sub: userAlreadyExists.id,
                expiresIn: '1m'
            },
        })

        // token "secreto" 
        const refreshToken = await response.jwtSign({
            role: userAlreadyExists.role
        },{
            sign: {
                sub: userAlreadyExists.id,
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