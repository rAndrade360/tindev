/*Esse é o arquivo server, onde fica nossas requisições ao servidor*/
const express = require('express');//Essa linha importa o express
const routes = require('./routes');//essa linha importa o arquivo routes
const mongoose = require('mongoose');//Essa linha importa o mongoose, que é o facilitador de acess ao banco de dados
const cors = require('cors');

const server = express(); //Essa é a constante que irá armazenar as funcionalidades do express

mongoose.connect('mongodb+srv://renan4g:renan4g@cluster0-qf7y6.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true //Essa linha permite o uso do novo esquema do mongodb
});//chamado de conexão ao banco de dados

server.use(cors());
server.use(express.json())//Informa ao express que ele deve usar JSON
server.use(routes);//Usa o routes


server.listen(3333);//Inicia o servidor na porta indicada