import { Cowboy, CowboyRepository } from "../repository/cowboy-repository";

export interface GetCowboysUseCaseRequest{
    vaquejada_id: number
}

export interface GetCowboysUSeCaseResponse{
    cowboys: Cowboy[]
}

export class GetCowboysUseCase{
    constructor(private cowboyRepository: CowboyRepository){}

    async getCowboys({vaquejada_id}: GetCowboysUseCaseRequest): Promise<GetCowboysUSeCaseResponse>{
        const cowboys = await this.cowboyRepository.list(vaquejada_id)

        return {cowboys}
    }
}