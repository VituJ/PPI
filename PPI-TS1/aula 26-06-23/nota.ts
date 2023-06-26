export class Nota {
    private bim1: number = 0;
    private bim2: number = 0;
    private bim3: number = 0;
    private bim4: number = 0;
    private final: number = 0

    constructor(b1: number, b2:number, b3:number, b4:number) {
        this.modificarBim1(b1);
        this.modificarBim2(b2);
        this.modificarBim3(b3);
        this.modificarBim4(b4);
        this.final = 0;
    }

    modificarBim1 (n: number): boolean {
        if(n >= 0 && n <= 100) {
            this.bim1 = n;
            return true;
        }
        return false;
    }

    obterBim1() {
        return this.bim1
    }



    modificarBim2 (n: number): boolean {
        if(n >= 0 && n <= 100) {
            this.bim2 = n;
            return true;
        }
        return false;
    }

    obterBim2() {
        return this.bim2
    }


    modificarBim3 (n: number): boolean {
        if(n >= 0 && n <= 100) {
            this.bim3 = n;
            return true;
        }
        return false;
    }

    obterBim3() {
        return this.bim3
    }


    modificarBim4 (n: number): boolean {
        if(n >= 0 && n <= 100) {
            this.bim4 = n;
            return true;
        }
        return false;
    }

    obterBim4():number {
        return this.bim4
    }


    calcularMediaParcial():number {
        return (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim4 * 3) / 10
    }


/*
    Média final da disciplina

    Caso o estudante obtenha média parcial maior ou igual a 60 a média final será a média parcial(mp).

    Caso contrário, a média final será calculada pela fórmula (mp + nav) / 2


    @param nav - nota da avaliação final
    @return - a média finl da disciplina

*/

    calcularMediaFinal(nav: number): number {
        let mp = this.calcularMediaParcial();
        if(nav < 60){
            return ( mp + nav)/2
        }
        return mp;

    }
}