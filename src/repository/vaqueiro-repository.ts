interface Vaqueiro{
    id: string
}

export interface VaqueiroRepository{
    findById(id: string): Promise< Vaqueiro |null>
}