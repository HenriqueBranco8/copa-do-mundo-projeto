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
    {id: 1, Seleção: "Brasil", Artilheiro:"Neymar"},
    {id: 2, Seleção: "Argentina", Artilheiro:"Messi"},
    {id: 3, Seleção: "Portugal", Artilheiro:"Cristiano Ronaldo"}
]

server.get('/artilheiros', async(request, response) => {
    response.type('aplication/json').code(200)
    return {artilheiros}
})

interface RouteParams{
    id: string
}

server.get<{Params: RouteParams}>('/artilheiros/:id', async(request, response) => {
    const id = parseInt(request.params.id)
    const selecao = artilheiros.find( s => s.id === id)


})

server.listen({port: 3636}, () => {
    console.log(`Server inciado na porta 3636`)
})