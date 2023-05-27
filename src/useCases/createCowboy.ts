import { Cowboy, CowboyRepository } from "../repository/cowboy-repository"
import { ManagerRepository } from "../repository/manager-repository"
import { VaquejadaRepository } from "../repository/vaquejada-repository"

interface CreateCowboyUseCaseRequest{
    password: string,
    boi_tv: boolean,
    cowboy_name: string,
    beats_treadmill: string,
    horse: string,
    horse_beats_treadmill: string,
    points: number,
    vaquejada_id: number
}

interface CreateCowboyUseCaseResponse{
    cowboy: Cowboy
}

export class CreateCowboyUseCase{
    constructor(private cowboyRepository: CowboyRepository, 
        private vaquejadaRepository: VaquejadaRepository, 
        private managerRepository: ManagerRepository){}

    async create({
        password,
        boi_tv,
        cowboy_name,
        beats_treadmill,
        horse,
        horse_beats_treadmill,
        points,
        vaquejada_id}: CreateCowboyUseCaseRequest): Promise<CreateCowboyUseCaseResponse>{

        const vaquejadaAlreadyExist = await this.vaquejadaRepository.findById(vaquejada_id)
        if(!vaquejadaAlreadyExist){
            throw new Error('vaquejada não existe')
        }

        const {manager_id} = vaquejadaAlreadyExist
        const manager = await this.managerRepository.findById(manager_id)

        if(manager.cowboy_number <= 0){
            throw new Error('Amount of cowboy exceeded')
        }

        const updateCowboyNumber = manager.cowboy_number
        await this.managerRepository.updateCowboyNumber(manager_id, updateCowboyNumber)


        const cowboyAlreadyExists = await this.cowboyRepository.findByPassword(password)
        if(cowboyAlreadyExists){
            throw new Error('Cowboy already exists')
        } 

        const cowboy = await this.cowboyRepository.create({
            password,
            boi_tv,
            cowboy_name,
            beats_treadmill,
            horse,
            horse_beats_treadmill,
            points,
            vaquejada_id
        })

        return {cowboy}
    } 
}



 