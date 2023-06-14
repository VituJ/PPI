export enum Raça{
    CARAMELO = 'Caramelo', 
    POODLE = 'Poodle', 
    PINSHER = 'Pinsher', 
    LABRADOR = 'Labrador', 
    PITBULL = 'Pitbull'
}

export class Cachorro {
    nome: string;
    raça: Raça;
    idade: number;

    constructor(nome: string, raça: Raça) { //Para colocar um novo atributo, basta separar por vírgula colocar o nome e depois dois pontos e o tipo da variável
        this.nome = nome; // O "this" é para se referir a um atributo
        this.raça = raça;
        this.idade = 0;
    }
}