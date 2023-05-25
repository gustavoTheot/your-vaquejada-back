import { knex } from "../../database";
import { Manager, ManagerRepository, ManagerUpdade } from "../manager-repository";


export class KnexManagerRepository implements ManagerRepository{
    async findById(id: string){
        const user = await knex('manager').select('*').where('id', id).first()
        return user
    }

    async findByEmail(email: string) {
        const user = await knex('manager').select('*').where('email', email).first()
        return user
    }
    async findByCpf(cpf: string){
        const user = await knex('manager').select('*').where('cpf', cpf).first()
        return user
    }

    async create(data: Manager){
        const [id] = await knex('manager').insert(data)
        const manager = await knex('manager').where('id', id).first()
        
        return manager
    }

    async delete(id: string){
        await knex('manager').where('id', id).delete()
    }

    async update(manager: ManagerUpdade) {
        const {id, ...updateData} = manager
        await knex('manager').where('id', id).update(updateData)
        const updateManager = await knex('manager').where('id', id).first()

        return updateManager
    }

}