const calcularAdvalorem = require('./src/modules/Advalorem');
const calculaGris = require('./src/modules/Gris');
const calculaPedagio = require('./src/modules/Pedagio');
const calculaTas = require('./src/modules/Tas');
const calculaAdmrodo = require('./src/modules/Admrodo');
const calculaAdmTrans = require('./src/modules/AdmTrans');
const calculaTsb = require('./src/modules/TaxaBalsa');
const seguroFluvial = require('./src/modules/SeguroFluvial');
const tarifaPortuaria = require('./src/modules/TarifaPortuaria');
const taxaBalsa = require('./src/modules/TaxaBalsa');
const trf = require('./src/modules/TaxaRestricaoFluvial');
let subtotal = calcularAdvalorem + calculaGris + calculaPedagio + calculaTas + calculaAdmrodo + calculaAdmTrans + calculaTsb + seguroFluvial + tarifaPortuaria + taxaBalsa + trf;
let tipoEmex = ['nf', 'fixo', 'vlfrete']; //Definindo se o emex é do tipo sobre a nota, fixo ou sobre o valor do frete
let resultado = 0;

let emex = (valorNf, percentual) =>{
    let fator = percentual / 100; //criando fator de multiplicação
    resultado = valorNf * fator;
}

let subtotalFrete = (subtotal, percentual) =>{
    let fator = percentual / 100; //criando fator de multiplicação
    resultado = total * fator;
}

let emexFixo = (valor) =>{
        resultado = valor;
}

    switch(tipo){
        case tipoEmex[0]:
            emex;
            break;
        case tipoEmex[1]:
            resultado = emexFixo;
            break;
        case tipoEmex[2]:
            resultado = subtotalFrete;
            break;
    }

    if(resultado <= valorMin){
        resultado = valorMin;
        return `Valor Emex: R$ ${resultado},00`;
    }else{
    return `Valor Emex: R$ ${resultado},00`;
    }
