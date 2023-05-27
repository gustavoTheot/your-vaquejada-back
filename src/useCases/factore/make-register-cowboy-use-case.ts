import { KnexCowboyRepository } from "../../repository/knex/knex-cowboy-repository";
import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository";
import { KnexVaquejadaRepository } from "../../repository/knex/knex-vaquejada-repository";
import { CreateCowboyUseCase } from "../createCowboy";

export function makeRegisterCowboyUseCase(){
    const cowboyRepository = new KnexCowboyRepository()
    const vaquejadaRepository = new KnexVaquejadaRepository()
    const managerRepository = new KnexManagerRepository()
    const cowboyUseCase = new CreateCowboyUseCase(cowboyRepository, vaquejadaRepository, managerRepository)

    return cowboyUseCase
}