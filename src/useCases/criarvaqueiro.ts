import { knex } from "../database"

 

interface criarvaqueiroUseCase{
    name: string,
    cpfv1: string,
    horse_name: string,
    treadmill: string,
    cpftread: string,
    tread_horse: string
}

export async function criarvaqueiroUseCase({name,
    cpfv1,
    horse_name,
    treadmill,
    cpftread,
    tread_horse}: criarvaqueiroUseCase){

    const cpf2AlreadyExists = await knex('vaqueiro')
        .select('*')
        .where('cpfv1', cpfv1)
        .first()

    const cpf3AlreadyExists = await knex('treadmill')
        .select('*')
        .where('cpftread', cpftread)
        .first()
   

    if(cpf2AlreadyExists){
        throw new Error('vaqueiro já cadastrado')
    }
    if(cpf3AlreadyExists){
        throw new Error('bate-esteira já cadastrado')
    }
        

    await knex('vaqueiro').insert({
        name,
        cpfv1,
        horse_name,
        treadmill,
        cpftread,
        tread_horse
    })

    
}



 