let login = prompt('Login: ');
let senha = prompt('Senha: ');
while (true){
    if  ( login == senha){
        document.write(`<h2>Login e senha precisam ser diferentes.</h2>`)
        break;
    } else {
        document.write(`<h2>OK!</h2>`);
        break;
    }
}