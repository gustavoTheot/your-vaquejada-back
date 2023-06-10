export interface Fase{
    id?: number
    vaquejada_id?: number;
    phase_number: number;
    races: number;
    vaqueiros: number[]
}

export interface PhaseRepository{
    create(data: Fase): Promise<Fase>
    findByVaquejadaId(vaquejadaId?: number): Promise<Fase[]>
    update(fase: Fase): Promise<Fase>
}