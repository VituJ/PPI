import { Cachorro, Raça } from "./cachorro";

//let bob: Cachorro //Opção 1 de criar um objeto

//Opção 2 de criar:
let Rex = new Cachorro('Tex Rex', Raça.POODLE);
let perola = new Cachorro('Perola', Raça.VIRATUDO);

console.log(Rex);
console.log(perola);

console.log(`Nome: ${perola.obterNome()}`);
perola.inserirIdade(50);
console.log(perola.obterIdade());
perola.inserirIdade(8);
console.log(perola.obterIdade());
console.log(perola.latir(6));

//Para compilar: tsc .\principal.ts
//Para rodar aqui mesmo: Node .\principal.js
//Para deixar o compilador rodando automaticamente: tsc -w