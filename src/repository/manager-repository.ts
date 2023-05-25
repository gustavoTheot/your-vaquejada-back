export type Manager = {
    id: string;
    name: string;
    phone: number;
    cpf: string;
    email: string;
    password: string;
    cowboy_number: number;
    adm_id: string;
};


export type ManagerUpdade = {
    id: string;
    name?: string;
    phone?: number;
    email?: string;
    password?: string;
}

export interface ManagerRepository{
    findById(id: string): Promise< Manager>
    findByEmail(email: string): Promise<Manager | null>
    findByCpf(cpf: string): Promise<Manager>
    create(data:Manager): Promise<Manager>
    delete(id: string): Promise<void>
    update(manager?: ManagerUpdade): Promise<ManagerUpdade>
}