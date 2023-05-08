let qtd_questoes = +prompt('Número de questões da prova:');
let permitidos = ['A', 'B', 'C', 'D', 'E'];
let gabarito = [];
let respostas = [];
let acertos = 0;
let i = 0;
let j = 0

if (qtd_questoes >= 1 && qtd_questoes <= 80){
    while(i < qtd_questoes){
        gabarito.push(prompt(`Gabarito da questão ${i+1}: `))
        if (!permitidos.includes(gabarito[i])){
            window.alert('Somente aceitas as letras A, B, C, D e E')
            gabarito.pop();
            i--;
        }
        i++;
    }
    while (j < qtd_questoes){
        respostas.push(prompt(`Resposta da questão ${j+1}: `));
        if (!permitidos.includes(respostas[j])){
            window.alert('Somente aceitas as letras A, B, C, D e E');
            respostas.pop();
            j--;
        } else {
            if (respostas[j] == gabarito[j]){
                acertos++;
            }
        }
        j++;
    }
} else{
    window.alert('Número de questões permitidas: 1 a 80')
}
document.write(`<h2>Quantidade de acertos: ${acertos}</h2>`)