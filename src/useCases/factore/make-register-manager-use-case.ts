import { KnexManagerRepository } from "../../repository/knex/knex-manager-repository";
import { CreateManagerUseCase } from "../createManager";

export function makeRegisterManagerUseCase(){
    const managerRepository = new KnexManagerRepository()
    const managerUseCase = new CreateManagerUseCase(managerRepository)

    return managerUseCase
}