import { Fase } from "./phase-repositry"

export interface Vaquejada{
    id?: number
    title: string
    local: string
    date: string
    time_start: number
    premium: string
    amount_teams: number
    races_by_stage: number
    phases: Fase[]
    manager_id: string
}

export interface VaquejadaRepository{
    findById(id: number): Promise<Vaquejada | undefined>
    create(data: Vaquejada): Promise<Vaquejada>
    delete(id: number): Promise<void | null>
}