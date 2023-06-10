import { knex } from "../../database";
import { Fase, PhaseRepository } from "../phase-repositry";

export class KnexPhaseRepository implements PhaseRepository{
    async findByVaquejadaId(vaquejadaId: number){
        const fases = await knex('phase')
            .where('vaquejada_id', vaquejadaId)
            .orderBy('phase_number')

        return fases
    }

    async update(fase: Fase){
        await knex('phase').where('id', fase.id).update(fase)
        const updateFase = await knex('phase')
            .where('id', fase.id)
            .first()

        return updateFase;
    } 

    async create(data: Fase){
        const [phaseId] = await knex("phase").insert(data);
        const createdPhase = await knex("phase")
            .where("id", phaseId)
            .first();

        return createdPhase;
    }  
}