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
    adm_id: string
}

export async function createManagerUseCase({name,
    phone,
    cpf,
    email,
    password,
    cowboy_number, adm_id}: CreateManagerUseCase){
        
    const passwordHash = await hash(password, 6)

    await knex('manager').insert({
        id: randomUUID(),
        name,
        phone,
        cpf,
        email,
        password: passwordHash, 
        cowboy_number,
        adm_id
    })
}