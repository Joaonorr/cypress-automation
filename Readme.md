# Automatizando um processo de criação de contas no site organizze

- [Descrição do Projeto](#descrição-do-projeto)
- [Arquitetura do projeto](#arquitetura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como executar os testes](#como-executar-os-testes)
  - [Execução via linha de comando](#execução-via-linha-de-comando)
  - [Execução via Cypress](#execução-via-cypress)
  - [Importante](#importante)

## Descrição do Projeto
<p align="justify">O projeto consiste em automatizar o processo de criação de contas no site organizze, utilizando cytoscape e cucumber.</p>

## Arquitetura do projeto

    └───cypress
    ├───downloads
    ├───fixtures
    ├───integration
    ├───plugins
    ├───support
    │   ├───elements
    │   ├───pageobjects
    │   └───steps
    └───videos

onde:

- **cypress**: pasta raiz do projeto
- **downloads**: pasta onde são armazenados os arquivos baixados durante os testes
- **fixtures**: pasta onde são armazenados os arquivos de massa de dados
- **integration**: pasta onde são armazenados as features de testes
- **plugins**: pasta onde são armazenados os plugins do cypress
- **support**: pasta onde são armazenados os arquivos de configuração do projeto
- **elements**: pasta onde são armazenados os elementos mapeados
- **pageobjects**: pasta onde são armazenados os arquivos de mapeamento das páginas
- **steps**: pasta onde são armazenados os arquivos de implementação dos testes
- **videos**: pasta onde são armazenados os vídeos dos testes

## Pré-requisitos

- [Node.js](https://nodejs.org/en/download/)
- [Cypress v9.7.0](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)

## Como executar os testes

### Execução via linha de comando

1. Clone o projeto do repositório
2. Acesse a pasta do projeto
3. Execute o comando `npm install` para instalar as dependências do projeto
4. Execute o comando `npx cypress run` para abrir o cypress

### Execução via Cypress

1. Clone o projeto do repositório
2. Acesse a pasta do projeto
3. Execute o comando `npm install` para instalar as dependências do projeto
4. Execute o comando `npx cypress open` para abrir o cypress
5. Clique no arquivo `cadastro_conta.feature` para executar o teste

### Importante

- Para executar o teste com sucesso, é necessário que o e-mail informado não esteja cadastrado no site organizze, você pode alterar o e-mail no arquivo `fixtures/user.json` na linha 7.

- Na primeira execução do teste, o cypress pode apresentar uma demora para executar o teste, pois ele irá instalar os plugins necessários para executar o teste.