let trf = function(valorNf, percentual, valorMin, valmax){
    let fator = percentual / 100; //criando fator de multiplicação
    let resultado = valorNf * fator; //fórmula advalorem

    if(resultado <= valorMin){
        resultado = valorMin;
        return `Valor Taxa restrição fluvial: R$ ${resultado},00`;
    }else if(resultado>valmax){
        resultado = valmax;
        return `Valor Taxa restrição fluvial: R$ ${resultado},00`;
    }else{
    return `Valor Taxa restrição fluvial: R$ ${resultado},00`;
    }
}

module.exports = trf;