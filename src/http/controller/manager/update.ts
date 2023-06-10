import {FastifyRequest, FastifyReply} from 'fastify'
import z from 'zod'
import { makeUpdateManagerUseCase } from '../../../useCases/factore/make-update-manager-user-case'

export async function updateManager(request: FastifyRequest <{Params: {id: string}}>, response: FastifyReply){
    const updateManagerBodySchema = z.object({
        name: z.string().optional(),
        phone: z.number().optional(),
        email: z.string().email().optional(),
        password: z.string().optional(),
    })


    const {id} = request.params

    try{
        const {name, phone, email, password} = updateManagerBodySchema.parse(request.body)

        const managerRepository = makeUpdateManagerUseCase()
        await managerRepository.update({
            id: id, 
            name, 
            phone , 
            email , 
            password})

        return response.status(201).send({message: 'Success'})
    }catch(error){
        if(error instanceof z.ZodError){
            return response.status(401).send({error: error.message})
        }

        return response.status(500).send({error: 'Internal Server Error'})
    }
}