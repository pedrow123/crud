# Crud Veículos

## Backend

Este é o guia de documentação para o Backend. Aqui você encontrará informações sobre a configuração, uso e rotas disponíveis no servidor. 
O projeto consiste em um servidor Node.js que se conecta a um banco de dados MySQL usando o Sequelize ORM e expõe uma API REST para acessar informações de veículos.
Para acessar o backend (já estando no diretório crud) faça:
```
cd crud-veiculos/src
```

### Banco de Dados

Para configurar o banco de dados é preciso abrir um terminal do computador e digitar o seguinte comando (supondo que o Docker esteja instalado na máquina):

```
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```

Foi configurado no arquivo database.js as credenciais de acesso ao banco de dados.

```
const Sequelize = require('sequelize');

const connection = new Sequelize('testing', 'root', 'ANSKk08aPEDbFjDO', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3307,
});

module.exports = connection;
```

### Instalação de dependências

Considerando o NodeJs já instalado na máquina (versão 18.12.0 utilizada no desenvolvimento) é necessário instalar as dependências no diretório raiz do projeto.
```
npm install
```
Se algo não funcionar é possível instalar individualmente as dependências:

Para a utilização do banco de dados MySQL.
```
npm install mysql2
```


Para fazer a camada HTTP e REST do serviço.
```
npm install sequelize
```

Para criar o ambiente de desenvolvimento.
```
npm install nodemon
```


Além disso, foi utilizada a biblioteca cors que permite que uma aplicação Web seja executada em uma origem e acesse recursos de outra origem diferente.
```
npm install cors
```

### Uso

Com o ambiente configurado, é possível iniciar o servidor. Para isso, é necessário usar o seguinte comando:
```
npm start
```
O servidor será executado na porta 3030.

### Rotas
Para testar as rotas pode ser utilizado a aplicação Insomnia (como feito no desenvolvimento).
O projeto expõe as seguintes rotas para gerenciar informações de veículos:

- GET /veiculos
  - Descrição: Retorna todos os veículos cadastrados.
  - Resposta: JSON com a lista de veículos.

- GET /veiculos/:id
  - Descrição: Retorna informações de um veículo específico com base no ID fornecido.
  - Parâmetros:ID do veículo a ser recuperado.
  - Resposta: JSON com informações do veículo.

- POST /veiculos
  - Descrição: Cria um novo veículo com base nos dados fornecidos no corpo da solicitação.
  - Corpo da solicitação: JSON com os dados do veículo a ser criado.
  - Resposta: JSON com o status da operação.

- PUT /veiculos/:id
  - Descrição: Atualiza as informações de um veículo existente com base no ID fornecido.
  - Parâmetros: ID do veículo a ser atualizado.
  - Corpo da solicitação: JSON com os dados a serem atualizados no veículo.
  - Resposta: JSON com as informações atualizadas do veículo.

- DELETE /veiculos/:id
  - Descrição: Exclui um veículo com base no ID fornecido.
  - Parâmetros:ID do veículo a ser excluído.
  - Resposta: JSON com o status da operação.

## Frontend

Este é o manual do frontend do projeto de Gerenciamento de Veículos. Aqui você encontrará informações sobre como instalar
as dependências, como a aplicação é estruturada e as partes mais importantes do código.

É necessário que o NodeJs esteja instalado na máquina e que o ambiente do backend esteja rodando assincronamente. O projeto foi desenvolvido utilizando ReactJS e suas bibliotecas.

Para acessar o backend (já estando no diretório crud) faça:
```
cd crud-veiculos/new-frontend/front-crud/src
```

### Instalação das dependências 

Antes de iniciar a aplicação frontend, o usuário deve garantir que as dependências necessárias estejam instaladas. 
Seguindo as etapas abaixo, é possível concluir a instalação:

1.Navegue até a pasta raiz do projeto frontend no terminal.

2.Execute o seguinte comando para instalar as dependências:

```
npm install
```
Essa ação garantirá que todas as bibliotecas necessárias estejam disponíveis para a execução da aplicação.

Se algo não der certo é possível instalar separadamente as dependências:

- Axios: biblioteca utilizada para chamar as rotas do backend (get, post, put, delete). Intercepta as requisições HTTP.

```
npm install axios
```

- react-router-dom: faz o gerenciamento de rotas em projetos React,
permitindo uma navegação mais fluida e sem a necessidade de fazer novas solicitações ao servidor

```
npm install react-router-dom
```

### Estrutura da Aplicação
A aplicação frontend utiliza o framework React e é composta por várias partes, incluindo:

- App.js: Este arquivo atua como o ponto de entrada da aplicação, configurando as rotas e a estrutura principal.
- /components: Esta pasta contém os diferentes componentes da aplicação.
  - Create.js: Permite criar um novo veículo.
  - List.js: Exibe a lista de todos os veículos cadastrados.
  - ListById.js: Permite buscar informações de um veículo com base no ID.
  - Update.js: Facilita a atualização das informações de um veículo.

É importante ressaltar que a rota de Delete é chamada dentro das páginas \list e \list-by-id, pois só passando o id do veículo já é possível fazer a exclusão, não necessitando mais tratamentos ou informações

### Uso da Aplicação
Para utilizar a aplicação frontend, o usuário pode seguir estas etapas:

- Iniciar a Aplicação: Execute o seguinte comando para iniciar a aplicação:
```
npm start
```
Isso dará início à aplicação em um servidor de desenvolvimento e abrirá uma janela do navegador com a aplicação em execução.

- Realizar Ações:

  - Criar um Veículo: Clique no botão "Criar Veículo" na página inicial e preencha os campos para criar um novo veículo.
  - Listar Veículos: Clique no botão "Listar Veículos" na página inicial para visualizar a lista de todos os veículos cadastrados.
  - Buscar Veículo por ID: Insira o ID do veículo desejado na caixa de texto na página inicial e clique no botão "Buscar Veículo".
  - Atualizar Veículo: Na lista de veículos, clique no botão "Atualizar" ao lado de um veículo para editar suas informações.
  - Excluir Veículo: Na lista de veículos, clique no botão "Deletar" ao lado de um veículo para excluí-lo.

Certifique-se de que o servidor backend também esteja em execução, pois a aplicação frontend se comunica com ele em http://localhost:3030, onde o servidor Node.js está em operação.

## Considerações
Este projeto de Gerenciamento de Veículos compreende um sistema completo que engloba tanto o backend quanto o frontend. 
Juntas, essas partes trabalham em harmonia para fornecer funcionalidades essenciais de gerenciamento de veículos. Abaixo estão algumas considerações finais que resumem a integração do backend e frontend:

### Backend
- O backend é desenvolvido em Node.js e utiliza o framework Express para criar uma API RESTful que lida com operações CRUD (Create, Read, Update, Delete) para veículos.
- Ele se conecta a um banco de dados MySQL usando o Sequelize ORM para realizar operações de banco de dados, como criar tabelas, inserir registros e buscar dados.
- O backend disponibiliza endpoints para criar, listar, buscar por ID, atualizar e excluir veículos, o que permite o gerenciamento completo de informações de veículos.

### Frontend
- O frontend é desenvolvido em React e permite aos usuários interagirem com o sistema de gerenciamento de veículos.
- Ele oferece uma interface de usuário amigável, com páginas para criar, listar, buscar por ID, atualizar e excluir veículos.
- O React Router é usado para lidar com a navegação entre as páginas do frontend, garantindo uma experiência de usuário suave.
- A comunicação com o backend é feita por meio de solicitações HTTP usando a biblioteca Axios, o que permite que o frontend envie e receba dados do servidor.

### Integração
- A integração entre o backend e o frontend é realizada por meio de solicitações HTTP para os endpoints fornecidos pelo backend. Isso permite que o frontend acesse e manipule os dados dos veículos no banco de dados.
- A aplicação frontend se comunica com o servidor backend em http://localhost:3030, onde o servidor Node.js está em execução.
- Juntos, o backend e o frontend oferecem uma solução completa para o gerenciamento de veículos, permitindo aos usuários criar, listar, atualizar e excluir registros com facilidade.

Em resumo, o projeto de Gerenciamento de Veículos demonstra a integração eficaz de um servidor backend robusto com um frontend amigável para criar uma aplicação completa e funcional.
Esse sistema oferece uma solução versátil para gerenciamento de informações de veículos e pode ser expandido e personalizado conforme necessário.
