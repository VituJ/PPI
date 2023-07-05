import { Nota } from "./nota";

let raissaPPI = new Nota(78, 90, 45, 100);
let carlosSOR = new Nota(0, 30, 40, 78);
console.log(`Média parcial Carlos = ${carlosSOR.calcularMédiaParcial()}`);
console.log(`Situação pós MP = ${carlosSOR.obterSituation()}`);
console.log(`Média Final Carlos = ${carlosSOR.calcularMédiaFinal(90)}`);
console.log(`Situação final = ${carlosSOR.obterSituation()}`);

/*import { Cachorro, Raça } from "./cachorro";

let mel = new Cachorro('Mel', Raça.CARAMELO, 6);
let bob = new Cachorro('Bob', Raça.DALMATA, 0);

console.log(mel);
console.log(bob);

console.log(`Nome de mel: ${mel.obterNome()}`);
mel.alterarIdade(5);
console.log(`Idade: ${mel.obterIdade()}`);
*/

