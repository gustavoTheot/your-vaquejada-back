import { Vaquejada, VaquejadaRepository } from "../repository/vaquejada-repository";

export interface GetVaquejadaUseCaseRequest{
    manager_id: string
}

export interface GetVaquejadaUSeCaseResponse{
    vaquejada: Vaquejada[]
}

export class GetVaquejadaUseCase{
    constructor(private vaquejadaRepository: VaquejadaRepository){}

    async execute({manager_id}: GetVaquejadaUseCaseRequest): Promise<GetVaquejadaUSeCaseResponse>{
        const vaquejada = await this.vaquejadaRepository.getVaquejada(manager_id)

        return {vaquejada}
    }
}