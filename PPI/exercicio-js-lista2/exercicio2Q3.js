let data1 = prompt("Digite uma data no formato: XX/YY/ZZZZ");
let data2 = prompt("Digite outra data no formato: XX/YY/ZZZZ");
let x = data1.split('/');
let y = data2.split('/');
let z = (y[2] - x[2]);
console.log("A diferença de anos é: " + z + " anos");