let gerado = gerarNumero();

function principal() {
    let palpite = parseInt(document.getElementById("palpite").value);
    let p = document.getElementById("resposta");
    comparar(palpite, gerado, p);
    document.getElementById("palpite").value = "";
}

function comparar(palpite, gerado, p) {
    if (palpite < 1 || palpite > 20) {
        p.innerHTML = "ERROR: O PALPITE PRECISA SER UM NÚMERO INTEIRO ENTRE 1 E 20";
    } else if (palpite === gerado) {
        p.innerHTML = "Acertou!";
    } else if (palpite < gerado) {
        p.innerHTML = "O número é maior.";
    } else if (palpite > gerado) {
        p.innerHTML = "O número é menor.";
    } else {
        p.innerHTML = "ERROR: CAMPO EM BRANCO - INSIRA ALGUM NÚMERO ENTRE 1 E 20";
    }
}

function gerarNumero() {
    return Math.floor(Math.random() * 20) + 1;
}