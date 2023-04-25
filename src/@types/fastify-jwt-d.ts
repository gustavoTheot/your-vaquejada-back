import '@fastify/jwt'

declare module '@fastify/jwt'{
    export interface FastifyJWT{
        user: {
            role: 'ADM' | 'MANAGAR',
            sub: string, 
        }
    }
}