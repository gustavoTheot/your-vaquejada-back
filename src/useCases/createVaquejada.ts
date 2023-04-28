import { knex } from "../database"

interface createManagerUseCase{
    title: string
    manager_id: string
}

export class CreateVaquejadaUeCase{

    async create({title, manager_id,}: createManagerUseCase){
        const dataManager = await knex('manager').select('*').where('id', manager_id).first()

        if(!dataManager){
            throw new Error('Manager does not exist')
        }

        const {cowboy_number} = dataManager

        if(cowboy_number <= 0){
            throw new Error('Amount of cowboy exceeded')
        }

        await knex('manager').where({id: manager_id}).update({cowboy_number: cowboy_number-1})

        await knex('vaquejada').insert({
            title: title,
            manager_id: manager_id
        })
    }
}