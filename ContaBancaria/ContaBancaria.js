const titularInput = document.getElementById("titular");
const saldoElement = document.getElementById("saldo");
const valorInput = document.getElementById("valor");

class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

const conta1 = new ContaBancaria("", 0);

function atualizarSaldo() {
    saldoElement.textContent = conta1.saldo;
}

function depositar() {
    const valor = parseFloat(valorInput.value);

    if (!isNaN(valor)) {
        conta1.depositar(valor);
        atualizarSaldo();
        valorInput.value = "";
    }
}

titularInput.addEventListener("input", function() {
    conta1.titular = titularInput.value;
});

atualizarSaldo();