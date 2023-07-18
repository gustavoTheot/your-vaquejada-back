# Introdução 

Esta documentação descreve uma aplicação construída para o gerenciamento de vaquejadas.

# Construção 🏗️

A contrução da aplicação foi pensando em uma organização adequada dos pacotes e arquivos de forma que facilitace manutenções e modificações futuras. 

### Http > Controller 🗃️

Os arquivos encontrados dentro dos subpacotes do pacote **controller** são responsáveis por lidar com as entradas de dados de uma requisição HTTP e retornar respostas conforme definido na aplicação. Essa parte é responsável pela comunicação direta com o front-end. Além disso, a definição das rotas também está presente nesses arquivos, identificados por **route.ts**.

Também existe o pacote **middlewares** dentro de **http**, que é responsável pelo processo de verificação da autenticação.


### Repository 📂

Dentro do pacote repository, estão todos os métodos responsáveis pelas funcionalidades que serão utilizadas, como criação, deleção, atualização e verificação de informações, como ID, e-mail ou senha. Resumindo, **é onde ficam os métodos utilizados na aplicação**.


### Use Case 📂

O pacote use case contém as **regras de negócio da aplicação**. Também é possível encontrar outros pacotes dentro de use case, como por exemplo, o pacote **factor**, que possui a instanciação das classes, onde ocorre a junção dos métodos e os casos de uso.

## Tecnologias Utilizads 💻

Tecnologias utilizadas na construção do back-end:

- Typescript
- Fastify (Framework para construção do servidor)
- JWT (Autenticação)
- Knex (Query builder)
- Sqlite3 (Banco de dados)
- Dotenv (Gerenciamento de variáveis de ambiente)
- Zod (Validação dos campos)
- Bcrypt (Codificação de senha)


# Necessário 🛠️

Observação: Para a execução do projeto, é necessário ter o Node.js instalado na sua máquina.

## Instalar 📦

Para instalar as dependências do projeto, execute o seguinte comando:
```bash
npm install

```

## Run

Para executar a aplicação, utilize o seguinte comando após ter aberto a aplicação seja no prompt de comando ou VSCode:
```bash
npm run start:dev
```

## Alteração no banco de dados

Para realizar alterações no banco de dados, siga os passos abaixo:

1. Excluir o arquivo **app.db** localizado no pacote **db**.
2. Realizar alteração desejado na migration 
3. depois executar:

```bash
npx knex migrate:latest
```

Dessa forma, um novo banco de dados será criado automaticamente com as alterações realizadas.