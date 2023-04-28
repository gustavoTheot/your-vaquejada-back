import { knex } from "../database";

export class GenereateRefreshToken{
    async execute(userId: string){
       
        const generateRefreshToken = await knex('refreshToken').insert({
            userId,
            expiresIn: '7d'
        })

        return generateRefreshToken
    }
}

