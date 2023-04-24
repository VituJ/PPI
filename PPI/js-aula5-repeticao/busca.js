let docentes = ['Erika', 'Bruno', 'Rodrigo', 'Glenda', 'Álvaro', 'Dayvid', 'Luiz', 'Thayse'];

let buscado = prompt('Digite o nome de um docente: ');
let i = 0;
let achou = false;
while( i < docentes.length && !achou){
    if(buscado.trim().toLowerCase() == docentes[i].toLowerCase()){ //toLowerCase() é um método que transforma tudo em minúsuclo
    // trim() tira os  espaços em branco de uma String
        achou = true;
    }
    i++;
}
if(achou){
    document.write(`Docente ${buscado} encontrado na posição ${--i}`);
} else{
    document.write(`Docente não encontrado!`)
}