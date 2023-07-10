"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
class Contato {
    constructor(nm, mail, fone) {
        this.nome = '';
        this.email = '';
        this.telefone = 0;
        this.alterarNome(nm);
        this.alterarEmail(mail);
        this.alterarFone(fone);
        /*this.nome = nm;
        this.email = mail;
        this.telefone = fone;*/
    }
    alterarNome(n) {
        this.nome = n;
        ;
    }
    obterNome() {
        return this.nome;
    }
    alterarEmail(n) {
        this.email = n;
    }
    obterEmail() {
        return this.email;
    }
    alterarFone(n) {
        this.telefone = n;
    }
    obterFone() {
        return this.telefone;
    }
}
exports.Contato = Contato;
let jose = new Contato('José', 'Araujo@gmail.com', 555555555);
console.log(jose);
jose.alterarFone(9876543);
console.log(jose.obterFone());
jose.alterarNome('Roberto');
console.log(jose.obterNome());
jose.alterarEmail('robertoeuclides@gmail.com');
console.log(jose.obterEmail());
console.log(jose);
