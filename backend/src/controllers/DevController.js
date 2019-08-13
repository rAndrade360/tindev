const axios = require('axios'); //Importação do axios, que faz a conexão com a api
const Dev = require('../models/Dev'); //Importação do model Dev

module.exports = {
    async index(req, res){
        const { user } = req.headers;
        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and:[
                {_id: {$ne: user}},
                {_id: {$nin: loggedDev.likes}},
                {_id: {$nin: loggedDev.deslikes}},
            ],
        })
        return res.json(users);
    },
  async  store(req, res){ //Função assíncrona que irá armazenar as informações
        const { username } = req.body; //Pega o username passado no body da aplicação

        const userExists = await Dev.findOne({user: username}); //Verifica se o usuário existe no banco

        if(userExists){ //Se já existir, retorna o usuário
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`); //Buscando api do github 

        const {name, bio, avatar_url: avatar} = response.data; //Pega os dados determinados da api

        const dev = await Dev.create({ //Cria o usuário com os dados da api
            name,
            user: username,
            bio,
            avatar
        });
        return res.json(dev); //Retorna o dev
    }
}