export interface Passowrds{
    id?: number,
    phase_id: number,
    passwrod_cowboy: string
}

export interface Phase{
    id: number,
    vaquejada_id: number,
    phase_number?: number,
    password_cowboy?: Passowrds[]
}

export interface PhaseRepository{
    findById(id: number): Promise<Phase>
    findByVaquejadaId(vaquejadaId: number): Promise<Phase[] | null>
    create(data: Phase): Promise<Phase>
    update(data: Phase): Promise<Phase>
    addCowboyInPhase(id: number, phaseNumber: number, passwordCowboy: string): Promise<void>
    addPasswordInTable(password: string, phaseId: number): Promise<number>
}