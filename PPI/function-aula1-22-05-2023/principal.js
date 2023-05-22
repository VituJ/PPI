/*console.log(Triangle(5,4,3));
console.log(Triangle(4,4,4));
let hp = 5;
let c1 = 3;
let c2 = 3;

if (Triangle(hp,c1,c2)){
    document.write('<p>É um triângulo</p>');
} else{
    document.write('<p>Não é um triângulo</p>');
}*/


if (par(2)){
    document.write('<p>É par</p>');
} else{
    document.write('<p>Não é par</p>');
} 

let n = +prompt('Número >= 0: ')
document.write(`<p>O fatorial de ${n} é ${fatorial(n)}</p>`)