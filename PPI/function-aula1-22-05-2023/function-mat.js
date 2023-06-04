/* Recebe 3 números e diz se esse três números formam um triângulo retângulo */

function Triangle(hp, c1, c2) { /*Ela espera receber três valores: hp, c1 e c2*/
    return hp ** 2 == c1 ** 2 + c2 ** 2;
    /* let res = hp ** 2 == c1 **2 + c2 **2; 
       return res*/
}

//console.log(triangle(5, 4, 3));
//console.log(triangle(4, 4, 4));
let hp = 5;
let c1 = 3;
let c2 = 3;

//if (triangle(hp, c1, c2)) {
  //  if (h1 > 0 && c1 > 0 && c2 > 0) {
        if (hp ** 2 == c1 ** 2 + c2 ** 2) {
  //          return true;
        }
    //}
//    return false;
//}
//document.write('<p>Não é um triângulo</p>');



function par(n) {
    return n % 2 == 0
}



function fatorial(n) {
    let fat = 1;
    while (n >= 2) {
        fat = fat * n;
        n--;
    }
    return fat;
}


function primo(n) {
    if (n >= 2) {
        let ehPrimo = true;

        let i = 2;
        while (i < n && ehPrimo) {
            if (n % i == 0) {
                ehPrimo = false;
            }
            i++;
        }
        return ehPrimo;
    } else {
        return false;
    }
}

/** Multiplica todos os elementos da lista
 *  pelo número 'n'  fornecido*/

function multiplica(lista, n){
    for (let i = 0; i < lista.length; i++){
        lista[i] *= n;
    }
}

function maximo(){
    if (arguments.length > 0){
        let maior = arguments[0];
        for (let i =1; i < arguments.length; i++){
            if (arguments[i] > maior){
                maior = arguments[i];
            }
        }
        return maior;
    }
    return Number.NEGATIVE_INFINITY;
}

function potencia (base , exp = 2){
    let pot = 1;

    for (let i = 0; i < exp; i++){
        pot = base * pot;
    }
    return pot;
}
