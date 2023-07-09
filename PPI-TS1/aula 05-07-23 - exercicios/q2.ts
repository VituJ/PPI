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

    alterarNome(n: string) {
        this.nome = n;;
    }

    obterNome():string{
        return this.nome;
    }

    alterarEmail(n: string) {
        this.email = n;
    }

    obterEmail():string{
        return this.email;
    }


    alterarFone(n: number){
        this.telefone = n;
    }

    obterFone():number{
        return this.telefone;
    }

}

let jose = new Contato('José', 'Araujo@gmail.com', 555555555);
console.log(jose);
jose.alterarFone(9876543);
console.log(jose.obterFone());
jose.alterarNome('Roberto');
console.log(jose.obterNome());
jose.alterarEmail('robertoeuclides@gmail.com');
console.log(jose.obterEmail());
console.log(jose)