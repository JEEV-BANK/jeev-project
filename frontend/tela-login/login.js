const findUserByLogin = async(req) =>{
    const response = await fetch('http://localhost:8081/find-conta-bancaria', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        body: { req }
    });
    return await response.json();
}

function entrar() {
    let agencia = document.querySelector("#agencia")
    let agenciaLabel = document.querySelector("#agenciaLabel")
    let conta = document.querySelector("#conta")
    let contaLabel = document.querySelector("#contaLabel")
    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhaLabel")

    // let msgError = document.querySelector("msgError");
    let req = {
        "agencia": agencia.value,
        "conta": conta.value,
        "senha": senha.value
    }
    console.log(findUserByLogin(req));

};
