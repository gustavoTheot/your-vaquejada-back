import { Phase } from "../repository/phase-repository"
import { VaquejadaRepository } from "../repository/vaquejada-repository"

interface UpdateVaquejadaUseCaseRequest {
    id: number,
    title?: string
    local?: string
    date?: string
    time_start?: number
    premium?: string
    amount_teams?: number
    phases?: Phase[]
}

interface UpdateVaquejadaUseCaseResponse {
    title?: string
    local?: string
    date?: string
    time_start?: number
    premium?: string
    amount_teams?: number
    phases?: Phase[]
}

export class ModifyVaquejadaUseCase{
  constructor(private vaquejadaRepository: VaquejadaRepository){}

  async update({
    id,
    title,
    local,
    date,
    time_start,
    premium,
    amount_teams,
    phases
  }: UpdateVaquejadaUseCaseRequest): Promise<UpdateVaquejadaUseCaseResponse>{
    const existingVaquejada = await this.vaquejadaRepository.findById(id)

    const updatedFields: UpdateVaquejadaUseCaseResponse = {
      title: title || existingVaquejada?.title,
      local: local || existingVaquejada?.local,
      date: date || existingVaquejada?.date,
      time_start: time_start || existingVaquejada?.time_start,
      premium: premium || existingVaquejada?.premium,
      amount_teams: amount_teams || existingVaquejada?.amount_teams,
      phases: phases || existingVaquejada?.phases
    };

    const update = await this.vaquejadaRepository.update({
      id, ...updatedFields
    })

    return update
  }

}

