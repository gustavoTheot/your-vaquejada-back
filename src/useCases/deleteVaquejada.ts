import { VaquejadaRepository } from "../repository/vaquejada-repository"
import { UserDoesNotExist } from "./error/error-delete-manager"

interface DeleteVaquejadaUseCaseRequest{
  id: number
}

export class DeleteVaquejadaUseCase{
  constructor(private vaquejaRepository: VaquejadaRepository){}

  async execute({id}: DeleteVaquejadaUseCaseRequest): Promise<void>{
    const vaquejadaExist = await this.vaquejaRepository.findById(id)

    if(!vaquejadaExist){
      throw new UserDoesNotExist('Vaquejada does not exist')
    }

    await this.vaquejaRepository.delete(id)
  }
}