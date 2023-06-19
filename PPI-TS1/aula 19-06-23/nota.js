"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
class Nota {
    constructor(b1, b2, b3, b4) {
        this.bim1 = 0;
        this.bim2 = 0;
        this.bim3 = 0;
        this.bim4 = 0;
        this.modificarBim1(b1);
    }
    modificarBim1(a) {
        if (a >= 0 && a <= 100) {
            this.bim1 = a;
        }
    }
    obterBim1() {
        return this.bim1;
    }
    calcularMediaParcial() {
        return; //(this.bim1 * 2 + ) / 10
    }
}
exports.Nota = Nota;
