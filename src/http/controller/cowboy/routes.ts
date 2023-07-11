import { FastifyInstance, RouteGenericInterface } from "fastify";
import { deleteVaqueiro } from "./delete";
import { createCowboy } from "./create";
import { listCowboys } from "./list";
import { middleAutheticate } from "../../middlewares/middlewareAuthenticate";

interface CreateCowboyRouteParams{
    id: string
}

interface CustomRouteGenericInterface extends RouteGenericInterface {
    Params: CreateCowboyRouteParams;
}

export async function vaqueiroRoutes(app: FastifyInstance){
    app.post<CustomRouteGenericInterface>('/vaquejada/:id', {onRequest: [middleAutheticate]}, createCowboy)
    app.get<CustomRouteGenericInterface>('/vaquejadas/:id', listCowboys)

    app.delete('/vaquejada/:id/vaqueiro/:id', deleteVaqueiro)
}
