import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository"
import { UpdateManagerUseCase } from "../updateManager"

export function makeUpdateManagerUseCase(){
    const managerRepository = new KnexManagerRepository()
    const managerUseCase = new UpdateManagerUseCase(managerRepository)

    return managerUseCase
} 