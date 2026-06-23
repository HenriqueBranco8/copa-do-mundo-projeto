import fastify from "fastify"
import cors from '@fastify/cors'

const server = fastify( {logger: true} )

server.register(cors,{
  origin: ["http://localhost:3636/artilheiros", "http://localhost:3636/grupos"],
} )

const grupos = [
  {
    id: 1,
    grupo: "A",
    selecoes: ["México", "Coreia do Sul", "Tchéquia", "África do Sul"]
  },
  {
    id: 2,
    grupo: "B",
    selecoes: ["Canadá", "Suíça", "Bósnia e Herzegovina", "Catar"]
  },
  {
    id: 3,
    grupo: "C",
    selecoes: ["Brasil", "Marrocos", "Escócia", "Haiti"]
  },
  {
    id: 4,
    grupo: "D",
    selecoes: ["Estados Unidos", "Austrália", "Paraguai", "Turquia"]
  },
  {
    id: 5,
    grupo: "E",
    selecoes: ["Alemanha", "Costa do Marfim", "Equador", "Curaçao"]
  },
  {
    id: 6,
    grupo: "F",
    selecoes: ["Holanda", "Japão", "Suécia", "Tunísia"]
  },
  {
    id: 7,
    grupo: "G",
    selecoes: ["Egito", "Irã", "Bélgica", "Nova Zelândia"]
  },
  {
    id: 8,
    grupo: "H",
    selecoes: ["Espanha", "Uruguai", "Cabo Verde", "Arábia Saudita"]
  },
  {
    id: 9,
    grupo: "I",
    selecoes: ["França", "Noruega", "Senegal", "Iraque"]
  },
  {
    id: 10,
    grupo: "J",
    selecoes: ["Argentina", "Áustria", "Argélia", "Jordânia"]
  },
  {
    id: 11,
    grupo: "K",
    selecoes: ["Colômbia", "Portugal", "RD Congo", "Uzbequistão"]
  },
  {
    id: 12,
    grupo: "L",
    selecoes: ["Inglaterra", "Gana", "Panamá", "Croácia"]
  }
]

server.get('/grupos', async(request, response) => {
    response.type('aplication/json').code(200)

    return [
        {grupos}
    ]
})

const artilheiros = [
  {
    id: 1,
    Seleção: "Alemanha",
    Artilheiro: "Deniz Undav",
    gols: 3
  },
  {
    id: 2,
    Seleção: "Argentina",
    Artilheiro: "Lionel Messi",
    gols: 3
  },
  {
    id: 3,
    Seleção: "Canadá",
    Artilheiro: "Jonathan David",
    gols: 3
  },
  {
    id: 4,
    Seleção: "Holanda",
    Artilheiro: "Crysencio Summerville",
    gols: 2
  },
  {
    id: 5,
    Seleção: "Espanha",
    Artilheiro: "Mikel Oyarzabal",
    gols: 2
  },
  {
    id: 6,
    Seleção: "Japão",
    Artilheiro: "Ayase Ueda",
    gols: 2
  },
  {
    id: 7,
    Seleção: "Uruguai",
    Artilheiro: "Maxi Araújo",
    gols: 2
  },
  {
    id: 8,
    Seleção: "Holanda",
    Artilheiro: "Cody Gakpo",
    gols: 2
  },
  {
    id: 9,
    Seleção: "Brasil",
    Artilheiro: "Vinicius Jr.",
    gols: 2
  },
  {
    id: 10,
    Seleção: "Suíça",
    Artilheiro: "Johan Manzambi",
    gols: 2
  },
  {
    id: 11,
    Seleção: "Holanda",
    Artilheiro: "Brian Brobbey",
    gols: 2
  },
  {
    id: 12,
    Seleção: "Suécia",
    Artilheiro: "Yasin Ayari",
    gols: 2
  },
  {
    id: 13,
    Seleção: "Inglaterra",
    Artilheiro: "Harry Kane",
    gols: 2
  },
  {
    id: 14,
    Seleção: "Noruega",
    Artilheiro: "Erling Haaland",
    gols: 2
  },
  {
    id: 15,
    Seleção: "França",
    Artilheiro: "Kylian Mbappé",
    gols: 2
  },
  {
    id: 16,
    Seleção: "Brasil",
    Artilheiro: "Matheus Cunha",
    gols: 2
  },
  {
    id: 17,
    Seleção: "Canadá",
    Artilheiro: "Cyle Larin",
    gols: 2
  },
  {
    id: 18,
    Seleção: "Japão",
    Artilheiro: "Daichi Kamada",
    gols: 2
  },
  {
    id: 19,
    Seleção: "Estados Unidos",
    Artilheiro: "Folarin Balogun",
    gols: 2
  },
  {
    id: 20,
    Seleção: "Marrocos",
    Artilheiro: "Ismael Saibari",
    gols: 2
  },
  {
    id: 21,
    Seleção: "Nova Zelândia",
    Artilheiro: "Elijah Just",
    gols: 2
  },
  {
    id: 22,
    Seleção: "Alemanha",
    Artilheiro: "Kai Havertz",
    gols: 2
  }
]
 
server.get('/artilheiros', async(request, response) => {
    response.type('aplication/json').code(200)
    return {artilheiros}
})

interface RouteParams{
    id: string
    selecao: string
}

server.get<{Params: RouteParams}>('/artilheiros/:id', async(request, response) => {

    const id = parseInt(request.params.id)
    const selecao = artilheiros.find( s => s.id === id)

    if(!selecao){
        response.type('aplication/json').code(404)
        return {message: "Seleção Not Found"}
    } else {
        response.type('aplication/json').code(200)
        return {selecao}
    }

})



server.listen({port: 3636}, () => {
    console.log(`Server inciado na porta 3636`)
})