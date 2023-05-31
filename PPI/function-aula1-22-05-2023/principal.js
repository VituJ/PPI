/*console.log(Triangle(5,4,3));
console.log(Triangle(4,4,4));
let hp = 5;
let c1 = 3;
let c2 = 3;

if (Triangle(hp,c1,c2)){
    document.write('<p>É um triângulo</p>');
} else{
    document.write('<p>Não é um triângulo</p>');
}


if (par(2)){
    document.write('<p>É par</p>');
} else{
    document.write('<p>Não é par</p>');
} 

let n = +prompt('Número >= 0: ')
document.write(`<p>O fatorial de ${n} é ${fatorial(n)}</p>`)*/

/*console.log(primo(4))
console.log(primo(8));
console.log(primo(7));
let l = [5, 3, 2, 1];
multiplica(l, 3);
console.log(l)*/

//Usando jquery
function calcular(){
    let n = document.getElementById('num').value;
    //let n = $('#num').val();
    let res = fatorial(n);
    let p = document.getElementById('res');
    //let p = $('#res');
    p.innerHTML = `O fatorial de ${n} é igual a ${res}`
    //p.html(`O fatorial de ${n} é igual a ${res}`) //esse método 'html' é o mesmo que p.innerHTML = 'frase'
}