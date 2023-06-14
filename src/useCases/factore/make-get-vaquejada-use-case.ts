import { KnexVaquejadaRepository } from "../../repository/knex/knex-vaquejada-repository";
import { GetVaquejadaUseCase } from "../getVaquejada";

export function makeGetVaquejadaUseCase(){
    const vaquejadaRepository = new KnexVaquejadaRepository()   
    const getVaquejada = new GetVaquejadaUseCase(vaquejadaRepository)

    return getVaquejada
}