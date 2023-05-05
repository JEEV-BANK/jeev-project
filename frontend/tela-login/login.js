const getAllUsers = async() =>{
    const response = await fetch('http://localhost:8081/login');
    const users = await response.json();
    return users;
}

function entrar() {
    // let agencia = document.querySelector("#agencia")
    // let agenciaLabel = document.querySelector("#agenciaLabel")

    // let conta = document.querySelector("#conta")
    // let contaLabel = document.querySelector("#contaLabel")

    // let senha = document.querySelector("#senha")
    // let senhaLabel = document.querySelector("#senhaLabel")

    // let msgError = document.querySelector("msgError");
    console.log(getAllUsers());

};
