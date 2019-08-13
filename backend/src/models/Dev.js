const {Schema, model} = require('mongoose'); //Importação do mongoose

//Esquema do cadastro Dev no banco de dados
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    deslikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]
},
{

timestamps: true, //Cria os logs 
});

module.exports = model('Dev', DevSchema);