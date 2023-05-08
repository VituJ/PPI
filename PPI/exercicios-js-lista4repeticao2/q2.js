let digitos = prompt('Digite nove números inteiros: ')
let confirmar = prompt('Confirme os nove dígitos: ')
let i = 0;
let j = 0;
let lista = digitos.split('');
let lista2 = confirmar.split('');
let s1 = 0;
let resto_s1 = 0
let d1;
let s2 = 0;
let resto_s2 = 0
let d2;
let multiplicador = 10;
let multiplicador2 = 10;
if (digitos.length < 9) {
    document.write(`<h2>É necessário digitar 9 números</h2>`)
} else {
    if(digitos == confirmar){
        while (i < lista.length) {
            lista[i] = lista[i] * multiplicador;
            s1 = s1 + lista[i];
            i++;
            multiplicador--;
        }
        resto_s1 = s1 % 11;
        if (resto_s1 == 0 || resto_s1 == 1) {
            d1 = 0;
        } else {
            d1 = (11 - resto_s1)
        }
        lista2.shift()
        lista2.push(d1)
        while (j < lista2.length) {
            lista2[j] = lista2[j] * multiplicador2;
            s2 = s2 + lista2[j];
            j++;
            multiplicador2--;
        }
        resto_s2 = s2 % 11;
        if (resto_s2 == 0 || resto_s2 == 1) {
            d2 = 0;
        } else {
            d2 = (11 - resto_s2)
        }
        document.write(`<h2>Os dois últimos números do CPF digitado são: ${d1} e ${d2}</h2>`)
    } else{
        window.alert(`Digite os exatos mesmos números: ${lista} da próxima vez`);
    }     
}