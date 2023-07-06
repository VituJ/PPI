export class Contato {

    private nome: string = '';
    private email: string = '';
    private telefone: number = 0;

    constructor (nm: string, mail: string, fone: number) {
        this.alterarNome(nm);
        this.alterarEmail(mail);
        this.alterarFone(fone);

        /*this.nome = nm;
        this.email = mail;
        this.telefone = fone;*/

    }

    alterarNome(n: string): string {
        if (n != '') {
            this.nome = n;
            return 'true';
        } 
        return 'false';
    }

    alterarEmail(n: string): string {
        if (n != '') {
            this.email = n;
            return 'true';
        } 
        return 'false';
    }

    alterarFone(n: number): number {
        if (n != 0) {
            this.telefone = n;
            return 2;
        } 
        return 3;
    }

}

let email1 = new Contato('José', 'Araujo@gmail.com', 0);
console.log(email1);
