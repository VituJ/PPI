/* Recebe 3 números e diz se esse três números formam um triângulo retângulo */

function Triangle(hp, c1, c2){ /*Ela espera receber três valores: hp, c1 e c2*/ 
    return hp ** 2 == c1 **2 + c2 **2;
    /* let res = hp ** 2 == c1 **2 + c2 **2; 
       return res*/
}

/*console.log(triangle(5,4,3));
console.log(triangle(4,4,4));
let hp = 5;
let c1 = 3;
let c2 = 3;

if (triangle(hp,c1,c2)){
    document.write('<p>É um triângulo</p>');
} else{
    document.write('<p>Não é um triângulo</p>');
}*/

function par (n){
    return n % 2 == 0
}

function fatorial (n){
    let fat = 1;
    while (n >= 2){
        fat = fat * i
        n--
    }
    return fat;
}