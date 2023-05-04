let digitos = prompt('Digite nove números inteiros: ')
let i = 0;
let j = 0;
let lista = digitos.split('');
let s1 = 0;
let resto_s1 = 0
let d1;
let s2 = 0;
let resto_s2 = 0
let d2;
let multiplicador = 10;
let multiplicador2 = 10;
if (digitos.length < 9) {
    document.write(`<h2>Não funciona</h2>`)
} else {
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
    lista.shift()
    lista.push(d1)

    while (j < lista.length) {
        lista[j] = lista[j] * multiplicador2;
        s2 = s2 + lista[j];
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
}