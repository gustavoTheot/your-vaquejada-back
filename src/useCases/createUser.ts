import { hash } from "bcrypt"
import { randomUUID } from "crypto"
import { knex } from "../database"

interface CreateManagerUseCase{
    name: string,
    phone: number,
    cpf: string,
    email: string,
    password: string,
    cowboy_number: number,
}

export async function createManagerUseCase({name,
    phone,
    cpf,
    email,
    password,
    cowboy_number}: CreateManagerUseCase){
        
    const passwordHash = await hash(password, 6)

    await knex('manager').insert({
        id: randomUUID(),
        name: name, 
        phone: phone,
        cpf: cpf, 
        email: email, 
        password: passwordHash, 
        cowboy_number: cowboy_number
    })
}