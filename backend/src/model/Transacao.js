const FormaPagamento = require("./FormaPagamento");

module.exports = class Transacao extends FormaPagamento{
    constructor( idTransacao, limiteTransacao, tempoSaque, tempoExtrato ) {
        this.idTransacao = idTransacao;
        this.limiteTransacao = limiteTransacao;
        this.tempoSaque = tempoSaque;
        this.tempoExtrat = tempoExtrato;
    }
}