let b1 = +prompt('Digite a nota do primeiro bimestre');
let b2 = +prompt('Digite a nota do segundo bimestre');
let b3 = +prompt('Digite a nota do terceiro bimestre');
let b4 = +prompt('Digite a nota do quarto bimestre');
let mp = ((b1 * 2) + (b2 * 2) + (b3 * 3) + (b4 * 3))/10
if (mp >= 60){
    console.log(`Sua média foi ${mp}, logo, você está aprovado`)
} else if(mp >= 20 && mp <60){
    console.log(`Sua média foi ${mp}, logo, você está em prova final`)
} else{
    console.log(`Sua média foi ${mp}, logo, você foi reprovado`)
}