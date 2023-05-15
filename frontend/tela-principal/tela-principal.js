let header = document.getElementById('header');
let navigationHeader = document.getElementById('navigation-header');
let container = document.getElementById('container');
let saldo = document.getElementById("saldo");
let credito = document.getElementById("credito");
let showSidebar = false;
let showSaldo = false;
let showCredito = false;
const tbody = document.querySelector("tbody")

const searchExtrato = async (id) => {
    const response = await fetch(`http://localhost:8081/find-extrato/${id}`)
    return await response.json();
}

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw'
        navigationHeader.style.animationName = 'showSidebar'
        container.style.filter = 'blur(5px)'

    } else {
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = 'closeSidebar'
        container.style.filter = ''
    }
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
})

function openSaldo() {
    showSaldo = !showSaldo;
    if (showSaldo) { saldo.type = "text"; }
    else { saldo.type = "password"; }
}

function openCredito() {
    showCredito = !showCredito;
    if (showCredito) { credito.type = "text"; }
    else { credito.type = "password"; }
}

const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag);
    element.innerText = innerText;
    return element;
}

const extrato = {
    id_pagamento: 1,
    id_transacao: 1,
    tipo_pagamento: 'D',
    recebimento: 1,
    valor: 588.50,
    descricao: 'pagament. conta',
    dt_pagamento: '2023-05-13'
}

const createRow = (extrato) => {
    const tr = createElement('tr');
    if (!extrato) {
        const vazio = createElement('td', '')
        const vazio2 = createElement('td', 'Extratos Vazio');
        const vazio3 = createElement('td', '');
        tr.appendChild(vazio);
        tr.appendChild(vazio2).style.textAlign = 'center';
        tr.appendChild(vazio3);
        return tr
    }
    let { id_pagamento, id_transacao, tipo_pagamento, recebimento,
        valor, descricao, dt_pagamento } = extrato;
    recebimento = recebimento.data[0];
    dt_pagamento = formatData(dt_pagamento)
    valor = formatValor(valor, recebimento);
    const data = createElement('td', dt_pagamento);
    const descricaoPagamento = createElement('td', descricao);
    const valorPagamento = createElement('td', valor);
    if (recebimento) {
        tr.appendChild(data).style.background = '#00cc0090';
        tr.appendChild(descricaoPagamento).style.background = '#00cc0090';
        tr.appendChild(valorPagamento).style.background = '#00cc0090';
    } else {
        tr.appendChild(data).style.background = '#ff330090';
        tr.appendChild(descricaoPagamento).style.background = '#ff330090';
        tr.appendChild(valorPagamento).style.background = '#ff330090';
    }
    return tr;
}

function formatData(data) {
    ano = data.substring(0, 4)
    mes = data.substring(5, 7)
    dia = data.substring(8, 10)
    return `${dia}/${mes}/${ano}`
}

function formatValor(valor, recebimento) {
    if (recebimento) {
        return `+R$${valor}`
    } else {
        return `-R$${valor}`
    }
}

const loadExtrato = async () => {
    const extratos = await searchExtrato(parseInt(localStorage.id_conta_bancaria));
    if (extratos.length === 0) {
        const tr = createRow('');
        tbody.appendChild(tr);
    } else {
        extratos.forEach((extrato) => {
            const tr = createRow(extrato);
            tbody.appendChild(tr);
        });
    }
}

const loadDadosPage = () => {
    saldo.value = localStorage.vl_saldo;
    loadExtrato();
}

loadDadosPage();

function logout() {
    localStorage.clear();
    window.location.pathname = "../frontend/tela-login/login.html"
}


var Draggable = function (elemento) {
    var that = this;
    this.elemento = elemento;
    this.posX = 0;
    this.posY = 0;
    this.top = 0;
    this.left = 0;
    this.refMouseUp = function (event) {
        that.onMouseUp(event);
    }

    this.refMouseMove = function (event) {
        that.onMouseMove(event);
    }

    this.elemento.addEventListener("mousedown", function (event) {
        that.onMouseDown(event);
    });
}

Draggable.prototype.onMouseDown = function (event) {
    this.posX = event.x;
    this.posY = event.y;

    this.elemento.classList.add("dragging");
    window.addEventListener("mousemove", this.refMouseMove);
    window.addEventListener("mouseup", this.refMouseUp);
}

Draggable.prototype.onMouseMove = function (event) {
    var diffX = event.x - this.posX;
    var diffY = event.y - this.posY;
    this.elemento.style.top = (this.top + diffY) + "px";
    this.elemento.style.left = (this.left + diffX) + "px";
}

Draggable.prototype.onMouseUp = function (event) {
    this.top = parseInt(this.elemento.style.top.replace(/\D/g, '')) || 0;
    this.left = parseInt(this.elemento.style.left.replace(/\D/g, '')) || 0;
    this.elemento.classList.remove("dragging");
    window.removeEventListener("mousemove", this.refMouseMove);
    window.removeEventListener("mouseup", this.refMouseUp);
}

var draggables = document.querySelectorAll(".draggable");
[].forEach.call(draggables, function (draggable, indice) {
    new Draggable(draggable);
});
