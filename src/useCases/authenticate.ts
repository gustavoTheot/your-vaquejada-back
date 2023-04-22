import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'
import { knex } from '../database'

interface IRequest{
    email: string,
    password: string,
}

class AuthenticateManagerUseCase{
    async execute({email, password}:IRequest){
        const userAlreadyExists = await knex('manager').where('email', email).first()

        if(!userAlreadyExists){
            throw new Error("User or password incorrect")
        }

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if(!passwordMatch){
            throw new Error("User or password incorrect")
        }

        // gerando token
        const token = sign({}, "718b1b55-bde1-40da-868f-8d31ccc9e7d0", {
            subject: userAlreadyExists.id,
            expiresIn: "120s"
        })

        return {token}
        
    }  
}

export {AuthenticateManagerUseCase};