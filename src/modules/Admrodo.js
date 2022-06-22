let admRodo = function(valorNf, percentual, valorMin){
    let fator = percentual / 100; //criando fator de multiplicação
    let resultado = valorNf * fator; //fórmula advalorem

    if(resultado <= valorMin){
        resultado = valorMin;
        return `Valor Admrodo: R$ ${resultado},00`;
    }else if(resultado>valmax){
        resultado = valmax;
        return `Valor Admrodo: R$ ${resultado},00`;
    }else{
    return `Valor Admrodo: R$ ${resultado},00`;
    }
}

module.exports = admRodo;