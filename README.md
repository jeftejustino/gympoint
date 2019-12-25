<h1 align=center>
<img src="https://raw.githubusercontent.com/jeftejustino/gympoint/master/.github/logo.png">
</h1>

<h3 align=center>Desafio Bootcamp - Rocketseat</h3>

## Observações
  
  A versão mobile foi desenvolvida e testada para celulares ANDROID

## Como começar

### Pré-requisitos

- Node na versão 10.16.3 ou maior
- Yarn versão 1.19 ou maior 
- Banco de dados REDIS
- Banco de dados Postgre ou semelhante
- Sentry (opcional)
- Reactotron (opcional)
- Emulador ou Celular Android



### Instalação

#### Backend

Localize o arquivo .env.example na pasta backend, duplique o arquivo e renomeie para .env

Abra o arquivo .env e edite as informações de acordo com o seu ambiente

Instale as dependências

```
cd backend
yarn
```

Rode as migrations

```
yarn sequelize db:migrate
```

Rode as seeds do projeto

```
#Roda todas as seeds
yarn sequelize db:seed:all
```
ou
```
#Dados de acesso do frontend
yarn sequelize db:seed --seed 20191018010828-admin-user.js

#Adicionar Planos Padrões
yarn sequelize db:seed --seed 20191219231542-plans.js

#Adicionar alguns alunos
yarn sequelize db:seed --seed 20191219231526-students-info.js
```

#### Frontend

Instale as dependências

```
cd frontend
yarn
```
  
Vá para o arquivo
`frontend > src > services > api.js`

edite a linha 4 com a url do seu servidor

````js
const api = axios.create({
  baseURL: 'http://localhost:3333',
});
````

#### Mobile

Instale as dependências

```
cd mobile
yarn
```
  
Vá para o arquivo
`mobile > src > services > api.js`

edite a linha 4 com a url do seu servidor

````js
const api = axios.create({
  baseURL: 'http://10.0.3.2:3333',
});
````

Vá para o arquivo
`mobile > src > config > ReactotronConfig.js`

edite a linha 8 com o host em que o reactotron irá se conectar

```js

  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.11.9' }) // host do reactotron
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();
```


### Como testar

#### Backend

  Vá para o seu terminal e execute os seguintes comandos
  ```
  cd backend
  
  #rodar o servidor principal
  yarn dev
  
  #rodar a fila de emails
  yarn queue
  ```
 pronto, o servidor já estara em funcionamento
 
 * o comando `yarn dev` e `yarn queue` deve ser rodado e mantido em aberto em terminais distintos
  
#### Frontend

  Vá para o seu terminal e execute os seguintes comandos
  
  ```
  cd frontend
  
  yarn start
  ```
  agora acesse a url http://localhost:3000 e poderá testar a aplicação
  
  ```
  #dados de acesso
  login: admin@gympoint.com
  senha: 123456
  ```
  
  garanta que o seu servidor esteja funcionando para poder testar toda a aplicação
  
  
#### Mobile

  Vá para o seu terminal e execute os seguintes comandos
  
  ```
  cd mobile
  
  # Com o emulador aberto ou celular conectado e configurado para depuração
  yarn android
  
  yarn start
  ```
  
  Asssim você já vai poder abrir o aplicativo no seu emulador/celular
  
  