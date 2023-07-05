"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nm, prc, qtd) {
        this.nome = '';
        this.categoria = '';
        this.marca = '';
        this.descricao = '';
        this.preco = 0;
        this.quantidade = 0;
        this.nome = nm;
        this.categoria = '';
        this.descricao = '';
        this.marca = '';
        this.preco = prc;
        this.quantidade = qtd;
    }
}
exports.Produto = Produto;
let teclado = new Produto('Teclado Gamer Spider GK706 ABNT2 Fortrek', 65, 1);
console.log(teclado);
