/*Soma dos números inteiros pares de 2 a 100*/
let soma = 0;
for (let par = 2; par <= 100; par += 2){
    soma += par;
}
console.log(`A soma dos inteiros pares de 2 a 100 é igual a ${soma}`);