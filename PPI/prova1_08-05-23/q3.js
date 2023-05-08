let preco = +prompt('Digite o preço do produto: ');
let pagamento= prompt('Use a tabela abaixo para inserir a forma de pagamento\n 1- 15% de desconto à vista no dinheiro.\n 2- 10% de desconto à vista no débito ou pix.\n 3- Preço normal em até 3x no cartão.\n 4- Acréscimo de 3% para até 5x no cartão.\n Digite o número da forma de pagamento:');
let desconto;
let acrescimo;
let parcela;
let pago;
if (pagamento < 1 || pagamento > 4 ){
    window.alert('ERROR: INSIRA UM NÚMERO ENTRE 1 E 4');
} else{
    if(pagamento == 1){
        desconto = 0.15 * preco;
        pago = preco - desconto;
        window.alert(`O preço original é de R$${preco}. Com o desconto de 15% no dinheiro, fica ao valor de R$${pago}`);
    } else if (pagamento == 2){
        desconto = 0.10 * preco;
        pago = preco - desconto;
        window.alert(`O preço original é de R$${preco}. Com o desconto de 10% à visto no débito ou pix, fica ao valor de R$${pago}`);
    } else if (pagamento == 3){
        parcela = preco/3
        window.alert(`O preço original é de R$${preco}. parcelando em até 3x no cartão, fica ao valor de R$${parcela.toFixed(2)} ao mês`);
    } else{
        acrescimo = preco * 0.03;
        pago = preco + acrescimo;
        parcela = pago/5;
        window.alert(`O preço original é de R$${preco}. parcelando em até 5x no cartão, fica ao valor de R$${pago.toFixed(2)} no total. Logo, é necessário pagar R$${parcela.toFixed(2)} ao mês`);
    }
}