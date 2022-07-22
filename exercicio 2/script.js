
const fibo = [];
fibo[0] = 0;
fibo[1] = 1;
const txt = '';

function fiboExecute() {

    let number = document.getElementById('number');
    let resultado = document.getElementById('resultado');
    let valorInserido = parseInt(number.value);

    for (let i = 2; i < valorInserido; i++) {

        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }

    resultado.innerHTML = varrerArray(fibo, valorInserido);

}


function varrerArray(fibo, elemento) {
    if (fibo.indexOf(elemento) >= 0)
        return "Pertence a sequência de Fibonnaci";
    else
        return "Não pertence a sequência de Fibonacci"
}