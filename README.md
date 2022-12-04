### TODO Test Binar

### 1. What is the Use of JSON in REST APIs?

as a format for exchanging client and server data or between applications

### 2. Explain how the REST API works?

Basically, the rest api has a way of working that is started by the rest client, which part will access data or resources on the rest server.


Installation project - manual

- clone project `git clone https://github.com/irvantaufik28/TODO_binar_mocktest.git`
- add node modules `npm install`
- rename file .env.example to .env
- configuration db in file .env
- create db `sequelize db:create`
- migrate table `sequelize db:migrate`
- fill the table with dummy data `sequelize db:seed:all`
- npm run start-dev

test each endpoint in swagger

- enter swagger : `localhost:3000/docs` 
- login and get token  
- add token in authorization (in accordance auth)
- testing all endpoint

### Demo
```
https://irvantaufik.herokuapp.com/
```
### Documentation
```
https://irvantaufik.herokuapp.com/docs/
```

