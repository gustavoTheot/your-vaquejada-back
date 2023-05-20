import { KnexCowboyRepository } from "../../repository/knex/knex-cowboy-repository";
import { CreateCowboyUseCase } from "../createCowboy";

export function makeRegisterCowboyUseCase(){
    const cowboyRepository = new KnexCowboyRepository()
    const cowboyUseCase = new CreateCowboyUseCase(cowboyRepository)

    return cowboyUseCase
}