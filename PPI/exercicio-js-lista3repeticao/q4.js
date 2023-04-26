let qtd_elementos = Number(prompt('Digite a quantidade de elementos que serão lidos: '));
let x = 1;
let numero;
let maior = 0;
while (x <= qtd_elementos){
    numero = Number(prompt('Digite um número: '));
    x++;
    if ( numero > maior){
        maior = numero
    }
}
document.write(`<h1>O maior número digitado foi ${maior}</h1>`)