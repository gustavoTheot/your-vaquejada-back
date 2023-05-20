import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository"
import { DeleteManagerUseCase } from "../deleteManager"

export function makeDeleteManagerUseCase(){
    const managerRepository = new KnexManagerRepository()
    const deleteManagerUseCase = new DeleteManagerUseCase(managerRepository)

    return deleteManagerUseCase
}