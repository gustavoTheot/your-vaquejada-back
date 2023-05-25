import { CowboyRepository } from "../repository/cowboy-repository"
import { UserDoesNotExist } from "./error/error-delete-manager"

interface DeleteCowBoyUseCaseRequest{
  id: number
}

export class DeleteCowBoyUseCase{
  constructor(private cowboyRepository: CowboyRepository){}

  async execute({id}: DeleteCowBoyUseCaseRequest): Promise<void>{
    const cowboyExists = await this.cowboyRepository.findById(id)

    if(!cowboyExists){
      throw new UserDoesNotExist('Cowboy does not exist')
    }

    await this.cowboyRepository.delete(id)
  }
}