export class Nota {
    private bim1: number = 0;
    private bim2: number = 0;
    private bim3: number = 0;
    private bim4: number = 0;

    constructor(b1: number, b2:number, b3:number, b4:number) {
        this.modificarBim1(b1)
    }

    modificarBim1 (a: number) {
        if(a >= 0 && a <= 100) {
            this.bim1 = a;
        }
    }

    obterBim1() {
        return this.bim1
    }

    calcularMediaParcial() {
        return //(this.bim1 * 2 + ) / 10
    }

}