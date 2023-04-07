let nome = prompt('Digite o seu nome: ');
let dias = Number(prompt('Digite a quantidade de dias de aluguel do carro: '));
let paga =  dias * 80;
console.log(`O nome do locatário: ${nome}, o preço diário do aluguel é: R$80,00, os dias alugados foram: ${dias} dias`);
console.log(`O locatário ${nome} alugou o carro por ${dias} dias e pagará um total de R$${paga}`);