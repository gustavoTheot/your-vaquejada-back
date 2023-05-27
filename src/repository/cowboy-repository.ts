import { Manager } from "./manager-repository"
import { Vaquejada } from "./vaquejada-repository"

export type Cowboy = {
    id?: number,
    password: string,
    boi_tv: boolean,
    cowboy_name: string,
    beats_treadmill: string,
    horse: string,
    horse_beats_treadmill: string,
    points: number,
    vaquejada_id: number,
}

export interface CowboyRepository{
    fintByIdVaquejada(id: number): Promise<Vaquejada | null>

    
    findById(id: number): Promise< Cowboy>
    create(data: Cowboy): Promise<Cowboy>
    findByPassword(password: string): Promise<Cowboy>
    delete(id: number): Promise<void>
}