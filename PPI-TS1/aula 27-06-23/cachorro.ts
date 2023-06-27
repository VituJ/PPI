export enum Raça {
    CARAMELO = 'Caramelo', 
    POODLE = 'Poodle', 
    PINSCHER = 'Pinsher', 
    DALMATA = 'Dálmata', 
    PITBULL = 'Pit Bull'
}
export class Cachorro {
    private nome: string;
    private raça: Raça;
    private idade: number;

    /* É o método chamado na criação do objeto. 
    Fornece um valor inicial aos atributos do objeto*/
    constructor(nm: string, 
                rc: Raça, 
                id: number) {
        this.alterarNome(nm);
        this.alterarRaça(rc);
        this.alterarIdade(id);
    }
    alterarNome(nm: string) {
        this.nome = nm;
    }
    obterNome(): string {
        return this.nome;
    }
    alterarIdade(id: number) {
        if (id >= 0 && id <= 30) {
            this.idade = id;
        } else {
            this.idade = 0;
        }
    }
    obterIdade(): number {
        return this.idade;
    }
    alterarRaça(rc: Raça) {
        this.raça = rc;
    }
    obterRaça(): Raça {
        return this.raça;
    }
}

