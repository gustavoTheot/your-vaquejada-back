import { Knex } from "knex"
import { knex } from "../database"

 

interface criarvaqueiroUseCase{
    name: string,
    cpfv1: string,
    horse_name: string,
    treadmill: string,
    cpftread: string,
    tread_horse: string
}

export async function deletevaqueiroUseCase(knex:Knex): Promise<void>{
    await knex.schema.dropTable('vaqueiro')


}




 