import { knex } from "../database"

interface CreateManagerUseCase{
    title: string
    manager_id: string
}

export async function createVaquejadaUeCase({
    title,
    manager_id,
   }: CreateManagerUseCase){

    const managerAlreadyExists = await knex('manager').select('*').first().where('id', manager_id)

    if(!managerAlreadyExists){
        throw new Error('Error in create vaquejada')
    }
        
    await knex('vaquejada').insert({
        title: title,
        manager_id: manager_id
    })
}