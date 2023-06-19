"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cachorro_1 = require("./cachorro");
//let bob: Cachorro //Opção 1 de criar um objeto
//Opção 2 de criar:
let Rex = new cachorro_1.Cachorro('Tex Rex', cachorro_1.Raça.POODLE);
let perola = new cachorro_1.Cachorro('Perola', cachorro_1.Raça.VIRATUDO);
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
