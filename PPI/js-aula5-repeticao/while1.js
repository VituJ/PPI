let docentes = ['Erika', 'Bruno', 'Rodrigo', 'Glenda', 'Álvaro', 'Dayvid', 'Luiz', 'Thayse'];

let i = 0; // Variável de controle

document.write('<h1>Docentes de Info 4v:</h1>')
document.write('<ul>')

while (i < docentes.length) { // Repete enquanto a expressão ao lado for verdadeira
    document.write(`<li>${docentes[i]}</li>`);
    i++; // Atualização da varíavel de conta
}

document.write('</ul>');

// com for:
/*
let docentes = ['Erika', 'Bruno', 'Rodrigo', 'Glenda', 'Álvaro', 'Dayvid', 'Luiz', 'Thayse'];

let i = 0; // Variável de controle

document.write('<h1>Docentes de Info 4v:</h1>')
document.write('<ul>')

for (let i = 0; i< docentes.length; i++ ){
    document.write(`<li>${docentes[i]}</li>`);
}


abaixo há uma outra forma de percorrer um Array, usando o forEach:

docentes.forEach(doc => {
    document.write(`<li>${doc}</li>`)
});

document.write('</ul>');
*/