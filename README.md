# Confiax-Fullstack

Teste para avaliação Vaga FullStack NodeJs, ReactJs, NestJs, Typescript

## Como rodar o projeto. 

> 1. Clone o repositório. 
> 2. Precisamos que um banco de dados mysql seja configurado, para isso:
>>  2.1 Copie o arquivo .env.example para um arquivo .env <br/>
>>  2.2 Crie um Banco de Dados mysql e insira os parametros no arquivo .env  <br/>
> 3. Ainda no .env, insira um secret para geração dos token JWT
> 4. Execute o comando "yarn" para gerar a node_modules
> 5. Execute as migrations com o comando "yarn sequelize db:migrate" 
> 6. Execute o comando "yarn dev" para inicar o backend.

(Dentro do projeto tem um arquivo do insomnia com os endpoints)
(O primeiro usuário foi criado com um Seed, seu acesso é "admin@email.com" e sua senha "confiax")

### Frontend
> 1. Acesse a pasta "frontend". 
>  2. Execute o comando "yarn" para gerar a node_modules.
> 3. Execute o comando "yarn dev" para inicar o frontend

## Sobre o projeto

O backend foi desenvolvido em NodeJS e Express, com Javascript. Foi utilizado jsonwebtoken para gerar as credênciais dos usuários. Yup para validar os dados de entrada e Sequelize como ORM de  acesso ao Banco. 
O frontend foi desenvolvido em NextJS, com Typescript, Styled Components. 

Algumas melhorias a se realizar neste projeto são: 
 1. Configuração do EsLint + Prettier no frontend
 2. Centralização dos estilos no arquivo "src/styles/theme.ts" 
 3. Melhoria de SEO nas páginas com metatags melhores
 
 Sobre o backend, acredito que foi realizado exatamente como eu queria. Destaco apenas a possibilidade da criação de um sistema de logs configuração de algum serviço de monitoramento, como o Sentry.
 
 
