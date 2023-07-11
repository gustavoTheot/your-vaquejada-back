import { KnexVaquejadaRepository } from "../../repository/knex/knex-vaquejada-repository"
import { ModifyVaquejadaUseCase } from "../modifyVaquejada"

export function makeUpdateVaquejadaUseCase(){
    const vaquejadaRepository = new KnexVaquejadaRepository()
    const vaquejadaUseCase = new ModifyVaquejadaUseCase(vaquejadaRepository)

    return vaquejadaUseCase
} 