const form = document.querySelector('.form');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span-required');
const btn = document.getElementById('btn');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const phoneRegex = /^\d{11}$/;

btn.addEventListener('click', (event) => {
    console.log(campos[0].value); 
    event.preventDefault();
    nameValidate();
    lastNameValidate();
    socialNameValidate();
    cpfValidate();
    emailValidate();
    phoneValidate();
    mainPasswordValidate();
    comparePassword();
});

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
    } else {
        removeError(0);
    }
}

function lastNameValidate() {
    if (campos[1].value.length < 3) {
        setError(1);
    } else {
        removeError(1);
    }   
}

function socialNameValidate(){
    if (campos[2].value.length < 3) {
        setError(2);
    } else {
        removeError(2);
    }   
}

function cpfValidate(){
    if (!cpfRegex.test(campos[3].value)) {
        setError(3);
    } else {
        removeError(3);
    }
}

function emailValidate(){
    if (!emailRegex.test(campos[4].value)) {
        setError(4);
    } else {
        removeError(4);
    }
}

function phoneValidate(){
    if (!phoneRegex.test(campos[5].value)) {
        setError(5);
    } else {
        removeError(5);
    }
}

function mainPasswordValidate(){
    if(campos[6].value.length < 8)
    {
        setError(6);
    }
    else
    {
        removeError(6);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[6].value === campos[7].value && campos[7].value.length >= 8)
    {
        removeError(7);
    }
    else
    {
        setError(7);
    }
}
try {
    localStorage.setItem('nome', 'valor');
    console.log('Os dados foram gravados com sucesso.');
  } catch (e) {
    console.log('Ocorreu um erro ao gravar os dados.');
  }