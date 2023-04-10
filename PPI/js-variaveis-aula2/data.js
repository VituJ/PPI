let data = new Date(); 

/*                  EXPLICAÇÃO
    Cria um método construtor que está vazio

    Método está associado a um objeto, por isso "Date()" é um método de "new"
*/

/*document.write(data);*/

const dia = data.getDate(); //dia do mês
const mes = data.getMonth() + 1; //mês 0-11
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
document.write(`
Parnamirim, ${dia}/${mes<10 ? '0'+mes : mes}/${ano}, ${hora}h${min}min`);

/*                 EXPLICAÇÃO

    teste ? exp_v : exp _F
    É igual a 
    if (teste) {
       exp_V
    } else{
        exp_F
    }

    Acima, tem um IF curto. Lado esquerdo da "?" é o IF e o direito é quando for V ou F
*/