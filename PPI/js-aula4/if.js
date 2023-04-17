const nav = navigator.userAgent;
let navegador = '';
console.log(nav);
if (nav.indexOf('Chrome') > -1){
    navegador = 'Chrome, Safari ou Edge';
}else if (nav.indexOf('Firefox') > -1){
    navegador = 'Firefox';
}else{
    navegador = 'Outro navegador';
}

console.log(navegador);