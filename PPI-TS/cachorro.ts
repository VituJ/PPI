export enum Raça{
    CARAMELO = 'Caramelo', 
    POODLE = 'Poodle', 
    PINSHER = 'Pinsher', 
    LABRADOR = 'Labrador', 
    PITBULL = 'Pitbull'
}

export class Cachorro {
    nome: string;
    raça: string;
    idade: number;

    constructor(nm: string, rc: Raça) { //Para colocar um novo atributo, basta separar por vírgula colocar o nome e depois dois pontos e o tipo da variável
        this.nome = nm; // O "this" é para se referir a um atributo
        this.raça = rc;
        this.idade = 0;
    }
}