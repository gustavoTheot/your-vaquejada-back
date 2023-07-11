import { knex } from "../../database";
import { Vaquejada, VaquejadaRepository, VaquejadaUpdate } from "../vaquejada-repository";

export class KnexVaquejadaRepository implements VaquejadaRepository{
    // pesquisando vaquejada pelo id
    async findById(id: number){
        const vaquejada = await knex('vaquejada').where('id', id).first()
        return vaquejada
    }

    // pesquisando vaquejada pelo seu id e pelo id do gerente
    async findManagerIdByVaqueada(id: number, managerId: string){
        const vaquejada = await knex('vaquejada')
        .where('id', id)
        .andWhere('manager_id', managerId)
        .first()

        return vaquejada
    }  

    // listando vaquejada pelo id do gerente
    async getVaquejada(id: string){
        const vaquejada = await knex('vaquejada')
        .select('*')
        .where('manager_id', id)
        
        return vaquejada
    }
    
    // criando vaquejada
    async create(data: Vaquejada){
        const [vaquejadaId] = await knex('vaquejada').insert(data)
        const createVaquejada = await knex('vaquejada').where('id', vaquejadaId).first()

        return createVaquejada

    }

    // deletando vaquejada pelo id
    async delete(id: number){
        const user = await knex('vaquejada').select('id').where('id', id).first()

        if(user === 0){
            return null
        }

        await knex('vaquejada').where('id', id).delete()
        await knex('cowboy').select('*').where('vaquejada_id', id).delete()
    }

    async update(vaquejada: VaquejadaUpdate) {
        const {id, ...updateData} = vaquejada
        await knex('vaquejada').where('id', id).update(updateData)
        const updateVaquejada = await knex('vaquejada').where('id', id).first()

        return updateVaquejada
    }

    async updatePhase(id: string, phase_number: number): Promise<void> {
        await knex('phase').where('id', id).first().update('phase_number', phase_number)
    }
}