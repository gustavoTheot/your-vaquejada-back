import { KnexCowboyRepository } from "../../repository/knex/knex-cowboy-repository";
import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository";
import { KnexPhaseRepository } from "../../repository/knex/knex-phase-repository";
import { KnexVaquejadaRepository } from "../../repository/knex/knex-vaquejada-repository";
import { CreateCowboyUseCase } from "../createCowboy";

export function makeRegisterCowboyUseCase(){
    const cowboyRepository = new KnexCowboyRepository()
    const vaquejadaRepository = new KnexVaquejadaRepository()
    const managerRepository = new KnexManagerRepository()
    const phaseRepository = new KnexPhaseRepository()
    const cowboyUseCase = new CreateCowboyUseCase(cowboyRepository, vaquejadaRepository, managerRepository, phaseRepository)

    return cowboyUseCase
}