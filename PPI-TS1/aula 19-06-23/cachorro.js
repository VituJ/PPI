"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = exports.Raça = void 0;
var Raça;
(function (Raça) {
    Raça["CARAMELO"] = "Caramelo";
    Raça["POODLE"] = "Poodle";
    Raça["PINSHER"] = "Pinsher";
    Raça["VIRATUDO"] = "Vira_TODAS_as_latas";
    Raça["PITBULL"] = "Pitbull";
})(Raça || (exports.Raça = Raça = {}));
class Cachorro {
    constructor(nome, raça = Raça.CARAMELO) {
        this.nome = nome; // O "this" é para se referir a um atributo
        this.raça = raça;
        this.idade = 0;
    }
    latir(quant) {
        let latido = '';
        for (let i = 0; i < quant; i++) {
            latido += 'Au';
        }
        return latido;
    }
    inserirNome(nm) {
        this.nome = nm;
    }
    obterNome() {
        return this.nome;
    }
    inserirIdade(id) {
        if (id >= 0 && id <= 25) {
            this.idade = id;
        }
    }
    obterIdade() {
        return this.idade;
    }
    inserirRaça(rc) {
        this.raça = rc;
    }
    obterRaça() {
        return this.raça;
    }
}
exports.Cachorro = Cachorro;
