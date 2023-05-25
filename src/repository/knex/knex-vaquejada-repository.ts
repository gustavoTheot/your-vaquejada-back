import { knex } from "../../database";
import { Vaquejada, VaquejadaRepository } from "../vaquejada-repository";

export class KnexVaquejadaRepository implements VaquejadaRepository{
    async findById(id: number){
        const vaquejada = await knex('vaquejada').select('*').where('id', id).first()

        return vaquejada
    }  
    
    async create(data: Vaquejada){
        const [vaquejadaId] = await knex('vaquejada').insert(data)
        const createVaquejada = await knex('vaquejada').where('id', vaquejadaId).first()

        return createVaquejada

    }

    async delete(id: number){
        const user = await knex('vaquejada').select('id').where('id', id).first()

        if(user === 0){
            return null
        }

        await knex('vaquejada').where('id', id).delete()
        await knex('cowboy').select('*').where('vaquejada_id', id).delete()
    }
}