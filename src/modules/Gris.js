let gris = function(valorNf, percentual, valorMin){
    let fator = percentual / 100; //criando fator de multiplicação
    let resultado = valorNf * fator; //fórmula advalorem

    if(resultado <= valorMin){
        resultado = valorMin;
        return `Valor Gris: R$ ${resultado},00`;
    }else{
    return `Valor Gris: R$ ${resultado},00`;
    }
}

module.exports = gris;