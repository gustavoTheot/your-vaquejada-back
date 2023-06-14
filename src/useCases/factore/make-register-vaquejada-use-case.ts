import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository";
import { KnexPhaseRepository } from "../../repository/knex/knex-phase-repository";
import { KnexVaquejadaRepository } from "../../repository/knex/knex-vaquejada-repository";
import { CreateVaquejadaUeCase } from "../createVaquejada";

export function makeRegisterVaquejadaUseCase(){
    const managerRepository = new KnexManagerRepository()
    const vaquejadaRepository = new KnexVaquejadaRepository()
    const phaseRepository = new KnexPhaseRepository()
    const vaquejadaUseCase = new CreateVaquejadaUeCase(vaquejadaRepository, managerRepository, phaseRepository)

    return vaquejadaUseCase
}