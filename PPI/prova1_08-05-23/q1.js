let carro1 = [];
let carro2 = [];
let nome_1 = prompt('Digite o nome do carro 1: ');
let ano_1 = +prompt('Digite o ano do carro 1: ');
let valor_1 = +prompt('Digite o valor do carro 1: ');
let nome_2 = prompt('Digite o nome do carro 2: ');
let ano_2 = +prompt('Digite o ano do carro 2: ');
let valor_2 = +prompt('Digite o valor do carro 2: ');
let soma = valor_1 + valor_2;
carro1.push(nome_1);
carro1.push(ano_1);
carro1.push(valor_1);
carro1.push(nome_2);
carro1.push(ano_2);
carro1.push(valor_2);
document.write(`<h2>O nome do carro 1 é ${nome_1}, o nome do carro 2 é ${nome_2} e a soma entre o preço dos dois é R$${soma}<h2>`);

