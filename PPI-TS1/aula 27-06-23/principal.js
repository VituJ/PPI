"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nota_1 = require("./nota");
let safira = new nota_1.Nota(78, 89, 100, 90);
let raissa = new nota_1.Nota(78, 10, 39, 40);
//safira.alterarBim3(10);
console.log(safira);
console.log(`Média parcial Raissa: ${raissa.calcularMédiaParcial()}`);
console.log(`Situação Raissa: ${raissa.obterSituation()}`);
console.log(`Média Final Raissa: ${raissa.calcularMédiaFinal(90)}`);
console.log(`Situação Raissa: ${raissa.obterSituation()}`);
/*import { Cachorro, Raça } from "./cachorro";

let mel = new Cachorro('Mel', Raça.CARAMELO, 6);
let bob = new Cachorro('Bob', Raça.DALMATA, 0);

console.log(mel);
console.log(bob);

console.log(`Nome de mel: ${mel.obterNome()}`);
mel.alterarIdade(5);
console.log(`Idade: ${mel.obterIdade()}`);
*/ 
