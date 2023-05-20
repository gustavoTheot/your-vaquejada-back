import { knex } from "../database"
import { ManagerRepository } from "../repository/manager-repository"
import { Vaquejada, VaquejadaRepository } from "../repository/vaquejada-repository"

interface CreateVaquejdaUseCaseRequest{
    title: string
    local: string
    date: string
    time_start: number
    award: string
    amount_times: number
    manager_id: string
}

interface CreateVaquejadaUseCaseResponse{
    vaquejada: Vaquejada
}

export class CreateVaquejadaUeCase{
    constructor(private vaquejadaRepository: VaquejadaRepository, private managerRepository: ManagerRepository){}

    async execute({title, local, date, time_start, award, amount_times, manager_id}: CreateVaquejdaUseCaseRequest): Promise<CreateVaquejadaUseCaseResponse>{
        const dataManager = await this.managerRepository.findById(manager_id)

        if(!dataManager){
            throw new Error('Manager does not exist')
        }

        const {cowboy_number} = dataManager

        if(cowboy_number <= 0){
            throw new Error('Amount of cowboy exceeded')
        }

        await knex('manager').where({id: manager_id}).update({cowboy_number: cowboy_number-1})

        const vaquejada = await this.vaquejadaRepository.create({
            title,
            local,
            date,
            time_start,
            award,
            amount_times,
            manager_id,
        })

        return {
            vaquejada
        }
    }
}
