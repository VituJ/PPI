let notas = []
i = 0;
x = 1;
let acima = 0;
let media = 0;
let abaixo = 0;
let maior = 1;
let menor = 1;
while (i < 10){
    let notas_estudantes = +prompt(`Digite a nota do estudante ${i+1}: `)
    if(notas_estudantes >= 10 && notas_estudantes <= 100){
        notas.push(notas_estudantes);
        if (notas[i] < 60){
            abaixo++;
            i++
        } else if (notas[i] == 60){
            media++;
            i++;
        } else{
            acima++;
            i++
        }
    } else{
        window.alert(`Digite notas entre 10 e 100`)
    }
}
while (x < 10){  
    y = notas[x];   
    z = x-1; 
    while(z >= 0 && notas[z] > y){
        notas[z+1] = notas[z];
        z-=1; 
    }
    notas[z+1] = y
    x += 1;
}
window.alert(` Notas acima da média: ${acima}\n Notas na média: ${media}\n Notas abaixo da média: ${abaixo}\n Menor nota: ${notas[0]}\n Maior nota: ${notas[9]}`);