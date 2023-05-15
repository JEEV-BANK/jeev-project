module.exports = class Cartao {
    constructor( idCartao, idUsuario, numeroCartao, tipoCartao, validade, cartaoAtivo, 
        senha, limite, saldoCredito, codBandeira, cvv) {
        this.idCartao = idCartao;
        this.idUsuario = idUsuario;
        this.numeroCartao = numeroCartao;
        this.tipoCartao = tipoCartao;
        this.validade = validade;
        this.cartaoAtivo = cartaoAtivo;
        this.senha = senha;
        this.limite = limite;
        this.saldoCredito = saldoCredito;
        this.codBandeira = codBandeira;
        this.cvv = cvv;
    }
}