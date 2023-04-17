const idade = +prompt('Digite sua idade: '); // o prompt retorna uma String, não um número. Por isso coloca-se um "+" na frente do prompt, para converter de String para Number

//console.log('idade')

//let autorizar = false;

if (idade >= 18){
    //let autorizar = true;
    var autorizar = true
    //autorizar = true;
    console.log(autorizar);
}

console.log(idade);
console.log(autorizar);

// o let garante que a variável só vai ser vista no bloco em que foi posto.