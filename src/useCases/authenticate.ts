import {compare} from 'bcrypt'
import { knex } from '../database'

interface IRequest{
    email: string,
    password: string,
}

export class AuthenticateManagerUseCase{
    async execute({email, password}:IRequest){
        const userAlreadyExists = await knex('manager').where('email', email).first()

        if(!userAlreadyExists){
            throw new Error("User or password incorrect")
        }

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if(!passwordMatch){
            throw new Error("User or password incorrect")
        }

        return {userAlreadyExists}
        
    }  
}

