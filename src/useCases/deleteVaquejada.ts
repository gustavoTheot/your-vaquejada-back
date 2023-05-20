
import { VaquejadaRepository } from "../repository/vaquejada-repository"

interface DeleteVaquejadaUseCaseRequest{
  id: number
}

export class DeleteVaquejadaUseCase{
  constructor(private vaquejadaRepository: VaquejadaRepository){}

  async execute({id}: DeleteVaquejadaUseCaseRequest){
    const manager = await this.vaquejadaRepository.findById(id)

    
    if(!manager){
      throw new Error('User not found')
    }

    await this.vaquejadaRepository.delete(id)
  }
}