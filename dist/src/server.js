"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({ logger: true });
server.get('/grupos', async (request, response) => {
    response.type('aplication/json').code(200);
    return [
        { grupo: 'A', Times: 'Brasil, México, Holando, Romenia' }
    ];
});
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
];
server.get('/artilheiros', async (request, response) => {
    response.type('aplication/json').code(200);
    return { artilheiros };
});
server.get('/artilheiros/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const selecao = artilheiros.find(s => s.id === id);
    if (!selecao) {
        response.type('aplication/json').code(404);
        return { message: "Driver Not Found" };
    }
    else {
        response.type('aplication/json').code(200);
        return { selecao };
    }
});
server.listen({ port: 3636 }, () => {
    console.log(`Server inciado na porta 3636`);
});
//# sourceMappingURL=server.js.map