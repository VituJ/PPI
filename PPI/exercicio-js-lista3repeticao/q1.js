let login = prompt('Login: ');
let senha = prompt('Senha: ');
while (true){
    if  ( login == senha){
        document.write(`Login e senha precisam ser diferentes.`)
        break;
    } else {
        document.write(`OK!`);
        break;
    }
}