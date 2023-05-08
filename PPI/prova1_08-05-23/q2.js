let pessoas = ['Andréa', 'Gilmar', 'Osvaldo', 'Gabriela', 'Edílson' , 'Fábio', 'Ana', 'Luiz', 'Cléber' ,'Humberto', 'Erika', 'Iara', 'Beatriz', 'Uirá']
let i = 0;
document.write(`<h2>Lista das pessoas com mais de 4 letras no nome: </h2>`)
while (i < pessoas.length){
    if(pessoas[i].length > 4){
        document.write(`<li>${pessoas[i]};</li>`);
        i++;
    } else{
        i++;
    }
}
 /* Ana, Luiz, Iara, Uirá*/ 