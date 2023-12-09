const mongoose = require('mongoose');

const SolicitarSchema = new mongoose.Schema({
    status:String,
    user:String,
    nome:String,
    userid:String,

    siape:String,
    unidade:String,
    email:String,
    telefone:String,

    atividade:String,
    objetivo:String,
    rua:String,
    bairro:String,
    cidade:String,
    referência:String,
    cep:String,
    horario_de_partida:String,
    data_de_partida:String,
    numero_de_passageiros:Number,

    ruaR:String,
    bairroR:String,
    cidadeR:String,
    referênciaR:String,
    cepR:String,
    horarioR:String,
    dataR:String,
    numero_de_passageirosR:Number,
    

    parada:String,
    nome_endereco:String,
    motivo:String,

    nome_passageiro:String,
    comunidade:String,

    processo:String,
    data:String,
    destino:String,
    capacidade:Number,    
},
    {timestamps: true}
);

module.exports = mongoose.model("Solicitar", SolicitarSchema);