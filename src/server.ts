import fastify from "fastify"
import { request } from "http"

const server = fastify( {logger: true} )

server.get('/grupos', async(request, response) => {
    response.type('aplication/json').code(200)

    return [
        {grupo: 'A', Times: 'Brasil, México, Holando, Romenia'}
    ]
})

const artilheiros = [
    {Seleção: "Brasil", Artilheiro:"Neymar"},
    {Seleção: "Argentina", Artilheiro:"Messi"},
    {Seleção: "Portugal", Artilheiro:"Cristiano Ronaldo"}
]

server.get('/artilheiros', async(request, response) => {
    response.type('aplication/json').code(200)
    return {artilheiros}
})

server.listen({port: 3636}, () => {
    console.log(`Server inciado na porta 3636`)
})