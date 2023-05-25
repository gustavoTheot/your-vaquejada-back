import { knex } from "../database"
import { Cowboy, CowboyRepository } from "../repository/cowboy-repository"

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
    constructor(private cowboyRepository: CowboyRepository){}

    async create({
        password,
        boi_tv,
        cowboy_name,
        beats_treadmill,
        horse,
        horse_beats_treadmill,
        points,
        vaquejada_id}: CreateCowboyUseCaseRequest): Promise<CreateCowboyUseCaseResponse>{

        const vaquejadaAlreadyExist = await this.cowboyRepository.fintByIdVaquejada(vaquejada_id)
        const idCowboyAlreadyExists = await this.cowboyRepository.findByPassword(password)

        if(!vaquejadaAlreadyExist){
            throw new Error('vaquejada não existe')
        }

        const {manager_id} = vaquejadaAlreadyExist
        const managerId = await this.cowboyRepository.findByManagerId(manager_id)
        const { cowboy_number } = managerId 

        if(cowboy_number <= 0){
            throw new Error('Amount of cowboy exceeded')
        }

        const subtractCowboyNumber = cowboy_number - 1
        await this.cowboyRepository.updateCowboyNumber(manager_id, subtractCowboyNumber)

        if(idCowboyAlreadyExists){
            throw new Error('vaqueiro já cadastrado')
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



 