import { Produto } from "./q1";
import { Contato } from "./q2";
import { Televisao, ControleRemoto } from "./q3";

//Q1
let teclado = new Produto('Teclado Gamer Spider GK706 ABNT2 Fortrek',65,1);
console.log(teclado);

//Q2
let jose = new Contato('José', 'Araujo@gmail.com', 555555555);
console.log(jose);
jose.alterarFone(9876543);
console.log(jose.obterFone());
jose.alterarNome('Roberto');
console.log(jose.obterNome());
jose.alterarEmail('robertoeuclides@gmail.com');
console.log(jose.obterEmail());
console.log(jose)

//Q3
let LGTV = new Televisao();
let ControleLGTV = new ControleRemoto();

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

console.log(LGTV)