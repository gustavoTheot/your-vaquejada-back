import { KnexCowboyRepository } from "../../repository/knex/knex-cowboy-repository";
import { GetCowboysUseCase } from "../getCowboys";

export function makeGetCowboysUseCase(){
    const cowboyRepository = new KnexCowboyRepository()   
    const getCowboys = new GetCowboysUseCase(cowboyRepository)

    return getCowboys
}