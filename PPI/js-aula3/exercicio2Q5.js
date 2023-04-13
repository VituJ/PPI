let horastrabalhadas = Number(prompt('Digite a quantidade de horas trabalhadas semanalmente: '));
let valhora = Number(prompt('Digite o valor pago por hora: R$'));
let salariosemanal = 0;
if (valhora <= 40) {
    salariosemanal = horastrabalhadas + valhora;
} else{
    let horaextra = horastrabalhadas - 40;
    salariosemanal = (40 * valhora) + (horaextra * 1.5 * valhora);

}
console.log(`O valor total a ser pago nesta semana é de R$${salariosemanal}`);