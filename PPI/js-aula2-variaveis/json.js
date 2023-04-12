let batista1 = ['João Victor Batista', 20201144010013, 'Informática', 4, ['PPI', 'ESP', 'PDS', 'SOR']];
console.log(`Ano: ${batista1[3]}`);
console.log(`Disciplinas: ${batista1[4]}`);
/*Acima é um exemplo simples sem usar o JSON*/


let batista = {
    "Nome" : "João Victor Batista",
    "Matrícula" : 20201144010013,
    "Curso" : "Informática",
    "Ano" : 4,
    "Disciplinas" : ['PPI', 'ESP', 'PDS', 'SOR']
};
/*Acima é o exemplo com "JSON" onde no lado esquerdo está o nome da variável e do direito o valor; os ":" significa que à direita retorna algo para o da esquerda*/ 
console.log(`O curso do aluno ${batista.Nome} é ${batista.Curso}`);

let fa = {
    "Nome" : "João Victor Faustino",
    "Matrícula" : 20201144010066,
    "Curso" : "Informática",
    "Ano" : 4,
    "Disciplinas" : ['PPI', 'ESP', 'PDS', 'SOR']
};

let info4v =  [batista, fa];
console.log(`O curso do aluno ${batista.Nome} é ${batista.Curso}`);

/*O exemplo acima é um array de objetos*/ 