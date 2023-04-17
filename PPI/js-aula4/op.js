let x = 0;
let y = 5;
x = --y; //Isso significa "x = y-1" que é igual a 4
console.log(x)
console.log(y)
y = 8;
x = y++ //Primeira X = 8 e depois que faz a soma de 1 em Y, Y=9
console.log(x)
console.log(y)

x = x * (y + 4 ** 2);
//ou x *= y + 4 ** 2
console.log(x)
x = 5;
console.log(x == 5); // true
console.log(x == '5'); // true
console.log(x === '5'); //É falso pq verifica se o 5 é String. Não é.
console.log(x === 5) // true
console.log(x != '5'); //false

console.log (0 < y <=60); // No JS não pode fazer isso. Incorreto. Para testar duas condições, precisa colocar o "&&"
console.log(y > 0 && y <= 60);