# Copa do Mundo Minimal API

API simples desenvolvida com **Node.js**, **TypeScript** e **Fastify**, criada com foco em aprendizagem.

O projeto simula uma API da Copa do Mundo 2026, permitindo consultar grupos, seleções e artilheiros por meio de rotas HTTP.

---

## Objetivo do projeto

Este projeto foi criado para praticar os conceitos básicos de uma API, como:

* criação de servidor com Fastify
* criação de rotas GET
* retorno de dados em JSON
* uso de parâmetros na URL
* configuração básica de CORS
* organização inicial de dados em arrays e objetos
* prática com TypeScript

---

## Tecnologias utilizadas

* Node.js
* TypeScript
* Fastify
* @fastify/cors
* npm

---


## Observação

Este projeto tem foco em aprendizagem.
Por isso, os dados estão armazenados diretamente em arrays dentro do código.

Em projetos reais, normalmente esses dados ficariam em um banco de dados ou seriam consumidos de uma API externa.


---

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run start:dev
```

O servidor será iniciado na porta:

```txt
http://localhost:3636
```

---

## Rotas da API

### Listar grupos

Retorna todos os grupos da Copa do Mundo 2026.

```http
GET /grupos
```

Exemplo de requisição:

```txt
http://localhost:3636/grupos
```

Exemplo de resposta:

```json
[
  {
    "grupos": [
      {
        "id": 1,
        "grupo": "A",
        "selecoes": [
          "México",
          "Coreia do Sul",
          "Tchéquia",
          "África do Sul"
        ]
      }
    ]
  }
]
```

---

### Listar artilheiros

Retorna todos os artilheiros cadastrados.

```http
GET /artilheiros
```

Exemplo de requisição:

```txt
http://localhost:3636/artilheiros
```

Exemplo de resposta:

```json
{
  "artilheiros": [
    {
      "id": 1,
      "Seleção": "Alemanha",
      "Artilheiro": "Deniz Undav",
      "gols": 3
    },
    {
      "id": 2,
      "Seleção": "Argentina",
      "Artilheiro": "Lionel Messi",
      "gols": 3
    }
  ]
}
```

---

### Buscar artilheiro por ID

Retorna um artilheiro específico com base no `id` informado na URL.

```http
GET /artilheiros/:id
```

Exemplo de requisição:

```txt
http://localhost:3636/artilheiros/1
```

Exemplo de resposta:

```json
{
  "selecao": {
    "id": 1,
    "Seleção": "Alemanha",
    "Artilheiro": "Deniz Undav",
    "gols": 3
  }
}
```

Caso o ID não seja encontrado, a API retorna:

```json
{
  "message": "Seleção Not Found"
}
```

---

## Estrutura dos dados

### Grupos

Cada grupo possui:

| Campo      | Descrição                  |
| ---------- | -------------------------- |
| `id`       | Identificador do grupo     |
| `grupo`    | Letra do grupo             |
| `selecoes` | Lista de seleções do grupo |

Exemplo:

```ts
{
  id: 1,
  grupo: "A",
  selecoes: ["México", "Coreia do Sul", "Tchéquia", "África do Sul"]
}
```

---

### Artilheiros

Cada artilheiro possui:

| Campo        | Descrição                   |
| ------------ | --------------------------- |
| `id`         | Identificador do artilheiro |
| `Seleção`    | Seleção do jogador          |
| `Artilheiro` | Nome do jogador             |
| `gols`       | Quantidade de gols marcados |

Exemplo:

```ts
{
  id: 1,
  Seleção: "Alemanha",
  Artilheiro: "Deniz Undav",
  gols: 3
}
```

---

## Conceitos praticados

Neste projeto foram praticados conceitos importantes para o desenvolvimento backend:

* criação de uma API com Fastify
* uso de rotas HTTP
* retorno de respostas JSON
* uso de status code
* busca de dados por ID
* uso de arrays de objetos
* configuração de CORS
* tipagem de parâmetros com TypeScript
* inicialização de servidor local

---

## Exemplo de código principal

```ts
import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: ["http://localhost:3636/artilheiros", "http://localhost:3636/grupos"],
});

server.get("/grupos", async (request, response) => {
  response.type("aplication/json").code(200);

  return [
    { grupos }
  ];
});

server.get("/artilheiros", async (request, response) => {
  response.type("aplication/json").code(200);

  return { artilheiros };
});

server.listen({ port: 3636 }, () => {
  console.log("Server inciado na porta 3636");
});
```

---

## Possíveis melhorias futuras

* Corrigir o tipo de resposta para `application/json`
* Padronizar os nomes das propriedades dos objetos
* Criar uma rota para buscar grupos por ID
* Separar os dados em arquivos próprios
* Criar controllers para organizar as rotas
* Criar services para regras de negócio
* Adicionar tratamento global de erros
* Criar validações para parâmetros
* Adicionar banco de dados
* Criar testes automatizados
* Melhorar a configuração de CORS

---

## Autor

Projeto desenvolvido como prática de criação de uma Minimal API com Node.js, TypeScript e Fastify.
