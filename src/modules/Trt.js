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
const emex = require('./src/modules/Emex');
let subtotal = calcularAdvalorem + calculaGris + calculaPedagio + calculaTas + calculaAdmrodo + calculaAdmTrans + calculaTsb + seguroFluvial + tarifaPortuaria + taxaBalsa + trf + emex;

let emexfunc = (subtotal, percentual) =>{
    let fator = percentual / 100; //criando fator de multiplicação
    let resultado = 0;
    resultado = subtotal * fator;
}

if(resultado <= valorMin){
    resultado = valorMin;
    return `Valor Taxa restrição de trânsito: R$ ${resultado},00`;
}else{
return `Valor Taxa restrição de trânsito: R$ ${resultado},00`;
}