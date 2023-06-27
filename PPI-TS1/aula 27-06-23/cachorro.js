"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = exports.Raça = void 0;
var Raça;
(function (Raça) {
    Raça["CARAMELO"] = "Caramelo";
    Raça["POODLE"] = "Poodle";
    Raça["PINSCHER"] = "Pinsher";
    Raça["DALMATA"] = "D\u00E1lmata";
    Raça["PITBULL"] = "Pit Bull";
})(Raça || (exports.Raça = Raça = {}));
class Cachorro {
    /* É o método chamado na criação do objeto.
    Fornece um valor inicial aos atributos do objeto*/
    constructor(nm, rc, id) {
        this.alterarNome(nm);
        this.alterarRaça(rc);
        this.alterarIdade(id);
    }
    alterarNome(nm) {
        this.nome = nm;
    }
    obterNome() {
        return this.nome;
    }
    alterarIdade(id) {
        if (id >= 0 && id <= 30) {
            this.idade = id;
        }
        else {
            this.idade = 0;
        }
    }
    obterIdade() {
        return this.idade;
    }
    alterarRaça(rc) {
        this.raça = rc;
    }
    obterRaça() {
        return this.raça;
    }
}
exports.Cachorro = Cachorro;
