export interface Vaquejada{
    id?: number
    title: string
    local: string
    date: string
    time_start: number
    award: string
    amount_times: number
    manager_id: string
}

export interface VaquejadaRepository{
    findById(id: number): Promise<Vaquejada | undefined>
    create(data: Vaquejada): Promise<Vaquejada>
    delete(id: number): Promise<void | null>
}