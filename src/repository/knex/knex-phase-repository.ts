import { knex } from "../../database";
import { Passowrds, Phase, PhaseRepository } from "../phase-repository";

export class KnexPhaseRepository implements PhaseRepository{
    // pesquisando vaquejada pelo id
    async findById(id: number){
        const phase = await knex('phase').where('id', id).first()

        return phase
    }

    // pesquisando vaquejada pelo seu id e pelo id do gerente
    async findByVaquejadaId(vaquejadaId: number){
        const phases = await knex('phase')
            .select('*')
            .where('vaquejada_id', vaquejadaId)

        if (!phases || phases.length === 0) {
            return null;
        }

        return phases
    }  

    // criando vaquejada
    async create(data: Phase){
        const [phaseId] = await knex('phase')
            .insert(data)

        const createPhase = await knex('phase')
            .where('id', phaseId)
            .first()

        return createPhase
    }

    async update(data: Phase) {        
        const phase = await this.findById(data.id)
        await knex('phase')
            .where('id', data.id)
            .update(data)

        return phase
    }

    async addPasswordInTable(password: string, phaseId: number){
        const [passwordId] = await knex('passwords')
            .insert(
                {
                    password_cowboy: password, 
                    phase_id: phaseId
                })

        const createPassword = await knex('passwords')
            .where('id', passwordId)
            .first()

        return createPassword
    }

    async addCowboyInPhase(vaquejadaId: number, phaseNumber: number, passwordCowboy: string){
        const phases = await this.findByVaquejadaId(vaquejadaId)

        if (!phases || phases.length === 0) {
            return;
        }

        const [phaseId] = phases
        const passwordId = await this.addPasswordInTable(passwordCowboy, phaseId.id)
        

        for(const phase of phases){
            const updataPhases = {
                ...phases,
                password_cowboy: [...phase.password_cowboy, passwordId]
            }

            await knex('phase')
                .where('id', phase.id)
                .update(
                    {
                        phase_number: phaseNumber, 
                        password_cowboy: updataPhases.password_cowboy
                    })
        }
    }
}