export type Cowboy = {
    id?: number,
    password: string,
    cowboy_name: string,
    beats_treadmill: string,
    horse: string,
    horse_beats_treadmill: string,
    boi_tv: boolean,
    cats_cut: boolean,
    advanced_password: boolean,
    return_cowboy: boolean,
    vaquejada_id: number
}

export type CowboyUpdate = {
    id: string;
    name?: string;
    phone?: number;
    email?: string;
    password?: string;
}

export interface CowboyRepository{
    findById(id: number): Promise< Cowboy>
    create(data: Cowboy): Promise<Cowboy>
    delete(id: number): Promise<void>
    update(data: CowboyUpdate): Promise<CowboyUpdate>
    findByPassword(password: string): Promise<Cowboy>
}