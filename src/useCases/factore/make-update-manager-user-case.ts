import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository"
import { ModifyManagerUseCase } from "../modifyManager"

export function makeUpdateManagerUseCase(){
    const managerRepository = new KnexManagerRepository()
    const managerUseCase = new ModifyManagerUseCase(managerRepository)

    return managerUseCase
} 