export class Produto {

    private nome: string = '';
    private categoria: string = '';
    private marca: string = '';
    private descricao: string = '';
    private preco: number = 0;
    private quantidade: number = 0;

    constructor (nm: string, prc:number, qtd:number) {
        this.nome = nm;
        this.categoria = '';
        this.descricao = '';
        this.marca = '';
        this.preco = prc;
        this.quantidade = qtd;

    }

}

let teclado = new Produto('Teclado Gamer Spider GK706 ABNT2 Fortrek',65,1);
console.log(teclado);