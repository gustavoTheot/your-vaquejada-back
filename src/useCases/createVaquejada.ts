import { ManagerRepository } from "../repository/manager-repository"
import { Fase, PhaseRepository } from "../repository/phase-repositry"
import { Vaquejada, VaquejadaRepository } from "../repository/vaquejada-repository"

interface CreateVaquejdaUseCaseRequest{
    title: string
    local: string
    date: string
    time_start: number
    premium: string
    amount_teams: number
    races_by_stage: number
    phases: number
    manager_id: string
}

interface CreateVaquejadaUseCaseResponse{
    createVaquejada: Vaquejada
}

export class CreateVaquejadaUeCase{
    constructor(
        private vaquejadaRepository: VaquejadaRepository, 
        private managerRepository: ManagerRepository,
        private phaseRepository: PhaseRepository){}

    async execute({title, local, date, time_start, premium, amount_teams, races_by_stage, phases, manager_id}: CreateVaquejdaUseCaseRequest): Promise<CreateVaquejadaUseCaseResponse>{
        const dataManager = await this.managerRepository.findById(manager_id)

        if(!dataManager){
            throw new Error('Manager does not exist')
        }

        const {cowboy_number} = dataManager

        if(cowboy_number <= 0){
            throw new Error('Amount of cowboy exceeded')
        }

        const vaquejada: Vaquejada = {
            title, 
            local, 
            date, 
            time_start, 
            premium, 
            amount_teams, 
            races_by_stage, 
            phases: [], 
            manager_id
        }

        const createVaquejada = await this.vaquejadaRepository.create(vaquejada)
        vaquejada.id = createVaquejada.id

        let currentPhase = 1;

        while(currentPhase <= phases){
            const racesPerPhase = Math.ceil(amount_teams / races_by_stage);

            const fase: Fase = {
                vaquejada_id: vaquejada.id,
                phase_number: currentPhase,
                races: racesPerPhase,
                vaqueiros: []
            }

            vaquejada.phases.push(fase) 


            const createPhase = await this.phaseRepository.create(fase)
            fase.id = createPhase.id

            await this.phaseRepository.update(fase)

            currentPhase++
        }        

        return {
            createVaquejada
        }
    }
}
