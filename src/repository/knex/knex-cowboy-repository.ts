import { knex } from "../../database";
import { Cowboy, CowboyRepository, CowboyUpdate } from "../cowboy-repository";

export class KnexCowboyRepository implements CowboyRepository{
    // pesquisando se a senha existe na vaquejada com o id passado
    async findByPasswordInVaquejadaId(password: string, vaquejadaId: number){
        const verify = await knex('cowboy')
        .select('*')
        .where('password', password)
        .andWhere('vaquejada_id', vaquejadaId)
        .first()

        if(!verify){
            return null
        }

        return verify

    }
    
     async findById(id: number){
        const user = await knex('cowboy')
        .select('*')
        .where('id', id)
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

    async findByPassword(password: string){
        const user = await knex('cowboy')
        .select('*')
        .where('password', password)
        .first()

        return user
    }


    async update(data: CowboyUpdate){
        const {id, ...updateData} = data
        await knex('cowboy').where('id', id).update(updateData)
        const update = await knex('cowboy').where('id', id).first()

        return update;
    }

    async list(vaquejada_id?: number){
        const cowboys = knex('cowboy').select('*').where('vaquejada_id', vaquejada_id)

        return cowboys;
    }
}