import fastify from "fastify";
import { env } from "./env";

const app = fastify()

app.get('/', async (req, res) => {
    return res.send({message: 'Hello world'})
})

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('Server running on port')
})

