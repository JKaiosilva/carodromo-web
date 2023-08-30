const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome: {

    },
    CPF: {

    },
    email: {

    },
    admin: {
        
    }
})


mongoose.model('usuarios', Usuario)