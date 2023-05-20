import { Cowboy, CowboyRepository } from "../repository/cowboy-repository"
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

        if(!vaquejadaAlreadyExist){
            throw new Error('vaquejada não existe')
        }

        const idCowboyAlreadyExists = await this.cowboyRepository.findByPassword(password)
    
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



 