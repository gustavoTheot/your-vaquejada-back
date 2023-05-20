import { knex } from "../database"
import { CowboyRepository } from "../repository/cowboy-repository"
import { Manager, ManagerRepository } from "../repository/manager-repository"

interface DeleteCowboyUseCaseRequest{
  id: number
}

export class DeleteCowboyUseCase{
  constructor(private cowboyRepository: CowboyRepository){}

  async execute({id}: DeleteCowboyUseCaseRequest){
    const manager = await this.cowboyRepository.findById(id)

    
    if(!manager){
      throw new Error('User not found')
    }

    await this.cowboyRepository.delete(id)
  }
}