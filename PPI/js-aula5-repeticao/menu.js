let op = -1; //opção a ser escolhida
do {
    console.log(`
        Opções\n
        1 - Adicionar\n
        2 - Editar\n
        3 - Remover\n
        -1 - Sair`);
    op = +prompt('Escolha uma Opção: ')
} while( op != -1);