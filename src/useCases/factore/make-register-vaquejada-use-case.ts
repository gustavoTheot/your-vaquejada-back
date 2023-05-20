import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository";
import { KnexVaquejadaRepository } from "../../repository/knex/knex-vaquejada-repository";
import { CreateManagerUseCase } from "../createManager";
import { CreateVaquejadaUeCase } from "../createVaquejada";

export function makeRegisterVaquejadaUseCase(){
    const managerRepository = new KnexManagerRepository()
    const vaquejadaRepository = new KnexVaquejadaRepository()
    const vaquejadaUseCase = new CreateVaquejadaUeCase(vaquejadaRepository, managerRepository)

    return vaquejadaUseCase
}