import { Manager, ManagerRepository } from "../repository/manager-repository"
import { UserDoesNotExist } from "./error/error-delete-manager"

interface DeleteManagerUseCaseRequest{
  id: string
}

export class DeleteManagerUseCase{
  constructor(private managerRepository: ManagerRepository){}

  async execute({id}: DeleteManagerUseCaseRequest): Promise<void>{
    const managerExists = await this.managerRepository.findById(id)

    if(!managerExists){
      throw new UserDoesNotExist('User does not exist')
    }

    await this.managerRepository.delete(id)
  }
}