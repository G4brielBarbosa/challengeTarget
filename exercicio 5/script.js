
const execute = () => {
    const caracteres = document.getElementById('input-txt').value;
    var array = caracteres.split('');
    var tamanho = array.length;
    var posicaoEsq = '';
    var posicaoDir = '';

    for(posicaoEsq = 0, posicaoDir = tamanho - 1; posicaoEsq < posicaoDir; posicaoEsq += 1, posicaoDir -= 1){
        var posicaoProv = array[posicaoEsq];
        array[posicaoEsq] = array [posicaoDir];
        array[posicaoDir] = posicaoProv;
    }
    
    var stringNova = array.join('');
    console.log(stringNova)
}
