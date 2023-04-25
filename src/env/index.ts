import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['developer', 'test', 'production']).default('developer'),
    DATABASE_CLIENT: z.enum(['sqlite', 'pg']).default('sqlite'),
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333),
    JWT_SECRET: z.string()
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    throw new Error('Invalid environment variable')
}

export const env = _env.data