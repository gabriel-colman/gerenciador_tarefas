# Task Management System

## Descrição
Uma aplicação de gerenciamento de tarefas construída com Node.js, Next.js e AWS.
Esse gerencia tarefas faz cadastro, edição, exclusão e listagem de tarefas.
A aplicação foi construída com o objetivo de demonstrar a integração entre diferentes tecnologias e serviços.

## Tecnologias Utilizadas
- Node.js
- Next.js
- AWS (Lambda, S3, DynamoDB, API Gateway)
- MongoDB
- Jest (testes)
- GitHub Actions (CI/CD)

## Instalação
1. Clone o repositório:
   ```bash
   git clone 

    cd gerenciamento_tarefas
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure as variáveis de ambiente:
    ```bash
    cp .env.example .env
    ```
    Preencha as variáveis de ambiente no arquivo `.env`.

4. Inicie a aplicação:
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:3000`.

Script de inicialização do projeto:
```bash
npm run dev: Inicia a aplicação em modo de desenvolvimento.
npm run build: Compila a aplicação.
npm run start: Inicia a aplicação em modo de produção.
npm run test: Executa os testes.
```


