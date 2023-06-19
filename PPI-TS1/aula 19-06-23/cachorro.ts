export enum Raça{
    CARAMELO = 'Caramelo', 
    POODLE = 'Poodle', 
    PINSHER = 'Pinsher', 
    VIRATUDO = 'Vira_TODAS_as_latas', 
    PITBULL = 'Pitbull'
}

export class Cachorro {
    private nome: string; // o private fecha o atributo
    private raça: Raça;
    private idade: number;

    constructor(nome: string, raça: Raça = Raça.CARAMELO) { //Para colocar um novo atributo, basta separar por vírgula colocar o nome e depois dois pontos e o tipo da variável
        this.nome = nome; // O "this" é para se referir a um atributo
        this.raça = raça;
        this.idade = 0;
    }

    latir(quant: number) {
        let latido = '';
        for (let i = 0; i< quant; i++){
            latido += 'Au';
        }
        return latido;
    }

    inserirNome(nm:string) {
        this.nome = nm;
    }

    obterNome(): string {
        return this.nome
    }

    inserirIdade(id:number){
        if(id >=0 && id <= 25) {
            this.idade = id;
        }
    }

    obterIdade(): number {
        return this.idade
    }

    inserirRaça(rc: Raça) {
        this.raça = rc;
    }

    obterRaça(): Raça {
        return this.raça
    }

}