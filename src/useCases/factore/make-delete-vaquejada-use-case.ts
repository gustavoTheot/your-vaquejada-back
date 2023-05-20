import { KnexVaquejadaRepository } from "../../repository/knex/knex-vaquejada-repository"
import { DeleteVaquejadaUseCase } from "../deleteVaquejada"

export function makeDeleteVaquejadaUseCase(){
    const vaquejadaRepository = new KnexVaquejadaRepository()
    const deleteVaquejadaUseCase = new DeleteVaquejadaUseCase(vaquejadaRepository)

    return deleteVaquejadaUseCase
}