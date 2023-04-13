let horastrabalhadas = Number(prompt('Digite a quantidade de horas trabalhadas semanalmente: '));
let valhora = Number(prompt('Digite o valor pago por hora: R$'));
let horaextra = Math.max(horastrabalhadas - 40, 0)
let salario = 40 * valhora + horaextra * valhora * 1.5;


console.log(`O valor total a ser pago nesta semana é de R$${salario}`);
