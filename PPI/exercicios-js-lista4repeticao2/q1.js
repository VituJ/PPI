qtd_questoes = +prompt('Digite a quantidade de questões da prova: ');
gabarito = prompt ('Digite o gabarito da questão: ');
respostas = prompt ('Digite a sua resposta da questão: ');
acertos = 0;
i = 0;
if (qtd_questoes == respostas.length && qtd_questoes == gabarito.length){
    while(i < qtd_questoes){
        if (gabarito[i] == respostas[i]){
            acertos++;
        }
        i++;
    }  
} else{
    document.write(`<h2>Digite uma quantidade de respostas ou um gabarito que condiza com a quantidade de questões.</h2>`)
}
