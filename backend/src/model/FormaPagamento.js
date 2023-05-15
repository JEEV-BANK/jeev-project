module.exports = class FormaPagamento {
    constructor( idPagamento, idContaBancaria, idTransacao, recebimento, tipoPagamento, 
        valor, dataPagamento, descricao) {
            this.idPagamento = idPagamento;
            this.idContaBancaria = idContaBancaria;
            this.idTransacao = idTransacao;
            this.recebimento = recebimento;
            this.tipoPagamento = tipoPagamento;
            this.valor = valor;
            this.dataPagamento = dataPagamento;
            this.descricao = descricao;
    }
}