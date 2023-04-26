let C = 0, A = 0, M = 0, G = 0, N = 0, B = 0;
while(true){
    let voto = Number(prompt('DIgite o número do seu voto, sendo eles:\n 11 - Cecília Meireles \n 33 - Ariano Suassuna \n 44 - Machado de Assis \n 99 - Graciliano Ramos \n  0 - voto em branco \n 1234 - Encerar votação'))
    if(voto == 11){
        C++;
    } else if (voto == 33){
        A++;
    } else if (voto == 44){
        M++;
    } else if (voto == 99){
        G++;
    } else if (voto == 1234){
        break  
    } else if (voto == 0){
        B++;
    } else{
        N++;
    }
}
document.write(`<h2>Resultado da votação:</h2>
<p>Cecília Meireles: ${C} votos</p>
<p>Ariano Suassuna: ${A} votos</p>
<p>Machado de Assis: ${M} votos</p>
<p>Graciliano Ramos: ${G} votos</p>
<p>Branco: ${B} votos</p>
<p>Nulo: ${N} votos</p>`)