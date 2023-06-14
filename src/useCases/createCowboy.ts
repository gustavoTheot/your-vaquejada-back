import { Cowboy, CowboyRepository } from "../repository/cowboy-repository"
import { ManagerRepository } from "../repository/manager-repository"
import { Fase, PhaseRepository } from "../repository/phase-repositry"
import { VaquejadaRepository } from "../repository/vaquejada-repository"

interface CreateCowboyUseCaseRequest{
    password: string,
    cowboy_name: string,
    beats_treadmill: string,
    horse: string,
    horse_beats_treadmill: string,
    boi_tv: boolean,
    cats_cut: boolean,
    advanced_password: boolean,
    return_cowboy: boolean,
    phase: number,
    vaquejada_id: number,
    manager_id: string,
}

interface CreateCowboyUseCaseResponse{
    createCowboy: Cowboy
}

interface Phase{
    vaquejada_id: number,
    cowboys: Cowboy[]
}

export class CreateCowboyUseCase{
    constructor(private cowboyRepository: CowboyRepository, 
        private vaquejadaRepository: VaquejadaRepository, 
        private managerRepository: ManagerRepository,
        private phaseRepository: PhaseRepository){}

    async create({
        password,
        cowboy_name,
        beats_treadmill,
        horse,
        horse_beats_treadmill,
        boi_tv,
        cats_cut,
        advanced_password,
        return_cowboy,
        phase,
        vaquejada_id,
        manager_id}: CreateCowboyUseCaseRequest): Promise<CreateCowboyUseCaseResponse>{
    
        const vaquejadaAlreadyExist = await this.vaquejadaRepository.findManagerIdByVaqueada(vaquejada_id, manager_id)
     
        if(vaquejadaAlreadyExist === undefined){
            throw new Error('vaquejada não existe')
        }
        

        const cowboyAlreadyExists = await this.cowboyRepository.findByPasswordInVaquejadaId(password, vaquejada_id)
        if(cowboyAlreadyExists){
            throw new Error('Cowboy already exists in vaquejada')
        } 

        const cowboy: Cowboy = {
            password,
            cowboy_name,
            beats_treadmill,
            horse,
            horse_beats_treadmill,
            boi_tv,
            cats_cut,
            advanced_password,
            return_cowboy,
            phase,
            vaquejada_id
        }

        const createCowboy = await this.cowboyRepository.create(cowboy)
        cowboy.id = createCowboy.id

        const newCowboyInPhase: Fase = {
            vaquejada_id: vaquejada_id,
            phase_number: 1,
            password_cowboy: password
        }

        const createPhase = await this.phaseRepository.create(newCowboyInPhase);
        newCowboyInPhase.id = createPhase.id;

        await this.phaseRepository.update(newCowboyInPhase);


        return {createCowboy}
    } 
}



 