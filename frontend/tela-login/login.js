
const findUserByLogin = async(req) =>{
    let aux;
    await fetch(`http://localhost:8081/find-conta-bancaria/${req[0]}/${req[1]}/${req[2]}`, {
        method: 'GET'
    })
    .then((response) => {
        return response.json()
    })
    .then((dado)=>{
        validationLogin(dado)
    })
    
}

function entrar() {
    const agencia = document.querySelector("#agencia")
    const conta = document.querySelector("#conta")
    const senha = document.querySelector("#senha")
    const req = [
        agencia.value,
        conta.value,
        senha.value
    ]
    findUserByLogin(req);
}

function validationLogin(dado) {
    if(dado.length == 0)
        alert('Usuário não encontrado!')
    else {
        console.log(dado);
        dado.forEach(element => {
           localStorage.setItem('chave_pix', element.chave_pix);
           localStorage.setItem('cpf_cnpj', element.cpf_cnpj);
           localStorage.setItem('dt_nascimento', element.dt_nascimento);
           localStorage.setItem('email', element.email);
           localStorage.setItem('id_conta_bancaria', element.id_conta_bancaria);
           localStorage.setItem('id_usuario', element.id_usuario);
           localStorage.setItem('instituicao', element.instituicao);
           localStorage.setItem('nome', element.nome);
           localStorage.setItem('nome_social', element.nome_social);
           localStorage.setItem('nr_agencia', element.nr_agencia);
           localStorage.setItem('nr_conta', element.nr_conta);
           localStorage.setItem('senha', element.senha);
           localStorage.setItem('sexo', element.sexo);
           localStorage.setItem('vl_poupança', element.vl_poupança);
           localStorage.setItem('vl_saldo', element.vl_saldo);
        });
    }
}
