import { existsSync } from "fs"
import { knex } from "../database"
import { Knex } from "knex"

interface CreateManagerUseCase{
    title: string
    manager_id: string
}

export async function modifyVaquejadaUeCase({
    title,
    manager_id,
   }: CreateManagerUseCase){

    const dataManager = await knex('manager').select('*').where('id', manager_id).first()
    
    if(title){
        throw('vaquejada existe. ')

    }


   


    await knex('vaquejada').insert({
        title: title,
        manager_id: manager_id
    })
}


export async function modify(knex:Knex): Promise<void>{
    await knex.schema.renameTable('vaquejada', 'newname')
}