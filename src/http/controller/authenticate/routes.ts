import { FastifyInstance } from "fastify";
import { authenticateManager } from "./authManager";

export async function authRoutes(app: FastifyInstance){
    app.post('/login', authenticateManager)
}