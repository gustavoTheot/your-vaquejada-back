import { Phase } from "./phase-repository"

export interface Vaquejada{
    id?: number
    title: string
    local: string
    date: string
    time_start: number
    premium: string
    amount_teams: number
    phases: Phase[]
    manager_id: string
}

export type VaquejadaUpdate = {
    id: number;
    title?: string;
    local?: string
    date?: string
    time_start?: number
    premium?: string
    amount_teams?: number
    phases?: Phase[]
}

export interface VaquejadaRepository{
    findById(id: number): Promise<Vaquejada | null>
    findManagerIdByVaqueada(id: number, managerId: string): Promise<Vaquejada | undefined>
    getVaquejada(id: string): Promise<Vaquejada[]>
    create(data: Vaquejada): Promise<Vaquejada>
    delete(id: number): Promise<void | null>
    update(vaquejada: VaquejadaUpdate): Promise<Vaquejada>
    updatePhase(id: string, phase_number: number): Promise<void>
}