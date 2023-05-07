import { knex } from "../../database";
import { VaqueiroRepository } from "../vaqueiro-repository";

export class KnexVaqueiroRepository implements VaqueiroRepository{
    async findById(id: string){
        const userId = await knex('vaqueiro').select('id', id).first()

        return userId
    }   
}