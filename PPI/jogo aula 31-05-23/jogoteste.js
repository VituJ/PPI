function gerarNumero() {
    return Math.floor(Math.random() * 20) + 1;
}

function comparar(palpite, gerado) {
}

function principal() {
    var numeroAleatorio = gerarNumeroAleatorio();
    adivinharNumero(numeroAleatorio);
}

