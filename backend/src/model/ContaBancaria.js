const FormaPagamento = require("./FormaPagamento");

module.exports = class ContaBancaria extends FormaPagamento {
    //propriedades e funções da classe aqui
    constructor( idContaBancaria, idUsuario, instituicao, 
        agencia, conta, senha, saldo, chavePix, poupanca) {
            this.idContaBancaria = idContaBancaria;
            this.idUsuario = idUsuario;
            this.instituicao = instituicao;
            this.agencia = agencia;
            this.conta = conta;
            this.senha = senha;
            this.saldo = saldo;
            this.chavePix = chavePix;
            this.poupanca = poupanca;
        this.endereco = new Endereco();
    }
 

}