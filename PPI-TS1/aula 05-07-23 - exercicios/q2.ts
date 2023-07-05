export class Contato {

    private nome: string = '';
    private email: string = '';
    private telefone: number = 0;

    constructor (nm: string, mail: string, fone: number) {
        this.nome = nm;
        this.email = mail;
        this.telefone = fone;

    }

}