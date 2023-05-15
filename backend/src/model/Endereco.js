module.exports = class Endereco {
    //propriedades e funções da classe aqui
    constructor() { }

    constructor(idEndereco, idUsuario,logradouro, idMunicipio, idEstado, cep, complemento, numero) {
        this.idEndereco = idEndereco ;
        this.idUsuario = idUsuario;
        this.logradouro = logradouro ;
        this.idMunicipio = idMunicipio ; 
        this.idEstado = idEstado ;
        this.cep = cep ;
        this.complemento = complemento ; 
        this.numero = numero;
    }
}