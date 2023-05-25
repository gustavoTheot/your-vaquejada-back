import { KnexCowboyRepository } from "../../repository/knex/knex-cowboy-repository"
import { DeleteCowBoyUseCase } from "../deleteCowboy"

export function makeDeleteCowboyUseCase(){
    const cowboyRepository = new KnexCowboyRepository()
    const deleteCowboyUseCase = new DeleteCowBoyUseCase(cowboyRepository)

    return deleteCowboyUseCase
}