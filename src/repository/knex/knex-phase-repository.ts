import { knex } from "../../database";
import { Fase, PhaseRepository } from "../phase-repositry";

export class KnexPhaseRepository implements PhaseRepository{
    // pesquisano vaquejada pelo id e ordenando por seu número
    async findByVaquejadaId(vaquejadaId: number){
        const fases = await knex('phase')
            .where('vaquejada_id', vaquejadaId)
            .orderBy('phase_number')

        return fases
    }

    // atualizando fases, a senha do vaqueiro e o número da fase
    async update(fase: Fase){
        await knex('phase').where('id', fase.id).update(fase)
        const updatedFase = await knex('phase')
            .where('id', fase.id)
            .first()

        return updatedFase;
    } 

    // criando fase
    async create(data: Fase){
        const [phaseId] = await knex("phase").insert(data);
        const createdPhase = await knex("phase")
            .where("id", phaseId)
            .first();

        return createdPhase;
    }  
}