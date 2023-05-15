const ContaBancaria = require("./ContaBancaria");
const Endereco = require("./Endereco");

module.exports = class Cliente extends ContaBancaria {
    //propriedades e funções da classe aqui
    constructor(idUsuario,nome, nomeSocial, email, sexo, cpfCnpj, dataNascimento, senha, endereco) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.email = email;
        this.sexo = sexo;
        this.cpfCnpj = cpfCnpj;
        this.dataNascimento = dataNascimento;
        this.senha = senha;
        this.endereco = new Endereco();
    }
}