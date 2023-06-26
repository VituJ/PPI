"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
class Nota {
    constructor(b1, b2, b3, b4) {
        this.bim1 = 0;
        this.bim2 = 0;
        this.bim3 = 0;
        this.bim4 = 0;
        this.final = 0;
        this.modificarBim1(b1);
        this.modificarBim2(b2);
        this.modificarBim3(b3);
        this.modificarBim4(b4);
        this.final = 0;
    }
    modificarBim1(n) {
        if (n >= 0 && n <= 100) {
            this.bim1 = n;
            return true;
        }
        return false;
    }
    obterBim1() {
        return this.bim1;
    }
    modificarBim2(n) {
        if (n >= 0 && n <= 100) {
            this.bim2 = n;
            return true;
        }
        return false;
    }
    obterBim2() {
        return this.bim2;
    }
    modificarBim3(n) {
        if (n >= 0 && n <= 100) {
            this.bim3 = n;
            return true;
        }
        return false;
    }
    obterBim3() {
        return this.bim3;
    }
    modificarBim4(n) {
        if (n >= 0 && n <= 100) {
            this.bim4 = n;
            return true;
        }
        return false;
    }
    obterBim4() {
        return this.bim4;
    }
    calcularMediaParcial() {
        return (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim4 * 3) / 10;
    }
    /*
        Média final da disciplina
    
        Caso o estudante obtenha média parcial maior ou igual a 60 a média final será a média parcial(mp).
    
        Caso contrário, a média final será calculada pela fórmula (mp + nav) / 2
    
    
        @param nav - nota da avaliação final
        @return - a média finl da disciplina
    
    */
    calcularMediaFinal(nav) {
        let mp = this.calcularMediaParcial();
        if (nav < 60) {
            return (mp + nav) / 2;
        }
        return mp;
    }
}
exports.Nota = Nota;
