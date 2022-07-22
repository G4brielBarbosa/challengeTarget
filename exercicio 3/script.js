
const fetchDados = () => {
    fetch("./dados.json")
        .then(response => {
            return response.json();
        })
        .then((response) =>{
            const dados = response;

            var valores = dados.map(dado => dado.valor);

            var dias = dados.map(dado => dado.dia);

            var newValores = valores.filter((valor) => valor != 0)

            var valorMinimo = newValores.reduce(function(a,b){
                return Math.min(a,b);
            });

            var valorMaximo = newValores.reduce(function(a,b){
                return Math.max(a,b);
            })

            var soma = 0;

            for(var i = 0; i < newValores.length; i++){
                soma += newValores[i];
            }
            
            var media = soma / newValores.length;

            var valoresAcimaMedia = newValores.filter((valor) => valor > media)
            
            

            var txtMin = '<h3> O menor valor é ' + valorMinimo; + '</h3'
            var txtMax = '<h3> O maior valor é ' + valorMaximo; + '</h3'
            var txtAcima = '<h3> A quantidade de dias que teve um valor acima da média é ' + valoresAcimaMedia.length + '</h3';


            document.getElementById('container-txt').innerHTML += txtMin + txtMax + txtAcima;

            
        })
}




