let produto = Number(prompt('Digite o preço da mercadora'));
let desconto = Number(prompt('Digite o desconto do produto em número inteiro'));
let conversor = desconto/100;
let calculo = produto * conversor;
let fim = produto - calculo;
console.log("O preço final do produto é de: " + "R$"+fim);
