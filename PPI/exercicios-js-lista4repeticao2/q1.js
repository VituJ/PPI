let qtd_questoes = +prompt('Digite a quantidade de questões da prova: ');
let gabarito = prompt ('Digite o gabarito da questão: ');
let respostas = prompt ('Digite a sua resposta da questão: ');
let acertos = 0;
let i = 0;
if (qtd_questoes == respostas.length && qtd_questoes == gabarito.length){
    while(i < qtd_questoes){
        if (gabarito[i] == respostas[i]){
            acertos++;
        }
        i++;
    }
    document.write(`<h2>A quantidade de acertos foi de ${acertos}</h2>`)
} else{
    document.write(`<h2>Digite uma quantidade de respostas ou um gabarito que condiza com a quantidade de questões.</h2>`)
}

