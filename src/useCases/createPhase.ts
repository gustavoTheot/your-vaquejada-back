import { Fase, PhaseRepository } from "../repository/phase-repositry";

interface CreatePhaseUseCaseRequest{
    vaquejada_id?: number
    phase_number: number,
    races: number,
    vaqueiros: []
}

interface CreatePhaseUseCaseResponse{
    phase: Fase
}

export class CreatePhaseUseCase{
    constructor(private phaseRepository: PhaseRepository){}

    async execute({vaquejada_id, phase_number, races, vaqueiros}: CreatePhaseUseCaseRequest): Promise<CreatePhaseUseCaseResponse> {
        const vaquejada = await this.phaseRepository.findByVaquejadaId(vaquejada_id)

        if(!vaquejada){
            throw new Error('Erro em create phase use case')
        }


        const phase = await this.phaseRepository.create({vaquejada_id, phase_number, races, vaqueiros}) 

        return {phase}
    }


}