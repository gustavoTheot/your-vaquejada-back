import { KnexCowboyRepository } from "../../repository/knex/knex-cowboy-repository"
import { DeleteCowboyUseCase } from "../deleteCowboy"

export function makeDeleteCowboyUseCase(){
    const cowboyRepository = new KnexCowboyRepository()
    const deleteCowboyUseCase = new DeleteCowboyUseCase(cowboyRepository)

    return deleteCowboyUseCase
}