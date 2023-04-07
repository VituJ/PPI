let c = Number(prompt('Digite o capital inicial'));
let i = Number(prompt('Digite a taxa de juros ao mês, Exemplo: 0.02 = 2%'));
let n = 240;
let m = (c * ((1 + i) ** n)).toFixed(2);
console.log(`O capital inicial era de ${c}, ao aplicar o juros de ${i} a.m por ${n} meses, o montante é de ${m}`);