import { knex } from "../../database";
import { Cowboy, CowboyRepository } from "../cowboy-repository";

export class KnexCowboyRepository implements CowboyRepository{
    async updateCowboyNumber(id: string, cowboy_number: number){
        await knex('manager').where('id', id).first().update('cowboy_number', cowboy_number)
    }

    async findByManagerId(id: string) {
        const manager = await knex('manager').where('id', id).first()

        return manager
    }

    async findById(id: number){
        const user = await knex('cowboy')
        .select('*')
        .where('id', id)
        .first()

        return user
    }   

    async fintByIdVaquejada(id: number){
        const vaquejada = await knex('vaquejada')
        .select('*')
        .where('id', id)
        .first()

        return vaquejada
    } 

    async findByPassword(password: string){
        const user = await knex('cowboy')
        .select('*')
        .where('password', password)
        .first()

        return user
    }

    async create(data: Cowboy){
        const [user] = await knex('cowboy').insert(data)
        const cowboy = await knex('cowboy').where({id: user}).first()
        
        return cowboy

    }

    async delete(id: number){
        await knex('cowboy').where('id', id).delete()
    }
}