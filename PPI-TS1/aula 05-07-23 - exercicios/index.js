"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q1_1 = require("./q1");
const q2_1 = require("./q2");
const q3_1 = require("./q3");
//Q1
let teclado = new q1_1.Produto('Teclado Gamer Spider GK706 ABNT2 Fortrek', 65, 1);
console.log(teclado);
//Q2
let jose = new q2_1.Contato('José', 'Araujo@gmail.com', 555555555);
console.log(jose);
jose.alterarFone(9876543);
console.log(jose.obterFone());
jose.alterarNome('Roberto');
console.log(jose.obterNome());
jose.alterarEmail('robertoeuclides@gmail.com');
console.log(jose.obterEmail());
console.log(jose);
//Q3
let LGTV = new q3_1.Televisao();
let ControleLGTV = new q3_1.ControleRemoto();
ControleLGTV.aumentarVolume(LGTV);
ControleLGTV.diminuirVolume(LGTV);
ControleLGTV.aumentarVolume(LGTV);
console.log(ControleLGTV.obterVolume(LGTV));
ControleLGTV.aumentarCanal(LGTV);
ControleLGTV.aumentarCanal(LGTV);
ControleLGTV.diminuirCanal(LGTV);
console.log(ControleLGTV.obterCanal(LGTV));
ControleLGTV.indicarCanal(LGTV, 87);
console.log(ControleLGTV.obterCanal(LGTV));
console.log(LGTV);
