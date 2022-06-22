let pedagio = function(peso, valorPedagio){
    let fracao = Math.ceil(peso / 100);
    let  resultado = fracao * valorPedagio;
    return `Valor pedágio: R$ ${resultado},00 \nFrações de pedágio ${fracao}`;
}

module.exports = pedagio;