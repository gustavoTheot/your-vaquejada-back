import { VaqueiroRepository } from "../repository/vaqueiro-repository"


interface DeleveVaqueiroUseCaseRequest {
    id: string,
}

interface DeleteVaqueiroUseCaseResponse {
    vaqueiro: DeleveVaqueiroUseCaseRequest;
}

export class DeleteVaqueiroUseCase{
    constructor(private vaqueiroRepository: VaqueiroRepository){}

    async execute({id}: DeleveVaqueiroUseCaseRequest): Promise<DeleteVaqueiroUseCaseResponse>{
        const vaqueiro = await this.vaqueiroRepository.findById(id)

        if(!vaqueiro){
            throw new Error('User not found')
        }
        return {vaqueiro}
    }
}