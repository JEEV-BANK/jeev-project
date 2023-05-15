const form = document.querySelector('.form');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span-required');
const btn = document.getElementById('btn');
const radio = document.querySelectorAll('.gender-inputs');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const phoneRegex = /^\d{11}$/;


btn.addEventListener('click', (event) => {
    event.preventDefault();
    nameValidate();
    lastNameValidate();
    socialNameValidate();
    cpfValidate();
    emailValidate();
    phoneValidate();
    mainPasswordValidate();
    comparePassword();
    if (campos[0].checked && campos[1].checked && campos[2].checked && campos[3].checked &&
        campos[4].checked && campos[5].checked && campos[6].checked && campos[7].checked) {
            let aletcont = gerarNumeroAleatorio();
            let nomeS = campos[2].value;
        alert("Olá "+nomeS+", \nSeja bem vindo(a) ao JEEV Bank! Abaixo segue-se sua a agência e conta:\n"+"\ngência: 3788\n"+"\nConta: "+aletcont);       
    } 
});

function gerarNumeroAleatorio() {
    var numero = Math.floor(100000 + Math.random() * 900000);
    return numero;
  }
  
function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = ''
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
        campos[0].checked = false;
        
    } else {
        removeError(0);
        campos[0].checked = true;
        
    }
}

function lastNameValidate() {
    if (campos[1].value.length < 3) {
        setError(1);
        campos[1].checked = false;
        
    } else {
        removeError(1);
        campos[1].checked = true;
    }   
}

function socialNameValidate(){
    if (campos[2].value.length < 3) {
        setError(2);
        campos[2].checked = false;
        
    } else {
        removeError(2);
        campos[2].checked = true;
    }   
}

function cpfValidate(){
    if (!cpfRegex.test(campos[3].value)) {
        setError(3);
        campos[3].checked = false;
       
    } else {
        removeError(3);
        campos[3].checked = true;
    }
}

function emailValidate(){
    if (!emailRegex.test(campos[4].value)) {
        setError(4);
        campos[4].checked = false;
        
    } else {
        removeError(4);
        campos[4].checked = true;
    }
}

function phoneValidate(){
    if (!phoneRegex.test(campos[5].value)) {
        setError(5);
        campos[5].checked = false;
        
    } else {
        removeError(5);
        campos[5].checked = true;
    }
}

function mainPasswordValidate(){
    if(campos[6].value.length < 8)
    {
        setError(6);
        campos[6].checked = false;
        
    }
    else
    {
        removeError(6);
        comparePassword();
        campos[6].checked = true;
    }
}

function comparePassword(){
    if(campos[6].value === campos[7].value && campos[7].value.length >= 8)
    {
        removeError(7);
        campos[7].checked = true;

    }
    else
    {
        setError(7);
        campos[7].checked = false;
        
      
    }
}