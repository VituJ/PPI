import { Nota } from "./nota";

//Abaixo tem uma maneira que não funciona pois existem notas menores que 0 e maiores que 80. Desse modo, precisa colocar o private e fazer um método
/*let raissaPPI = new Nota(78, -90, 45, 100);
console.log(raissaPPI);
raissaPPI.bim4 = 120;
console.log(raissaPPI);*/

let raissaPPI = new Nota(180, -90, 45, 100);
console.log(raissaPPI);
raissaPPI.modificarBim2(60);
raissaPPI.modificarBim1(80);
console.log(raissaPPI);


let carlosSOR = new Nota(0, 30, 40, 78)
console.log(`Nota B3 Carlos ${carlosSOR.obterBim3()}`)
console.log(`A média parcial de Carlos é ${carlosSOR.calcularMediaParcial()}`)
console.log(`A nota da avaliação final de Carlos foi de ${carlosSOR.calcularMediaFinal(61)}`)


/*let mediaPPI = new Nota(100, 60, 90, 34);
mediaPPI.modificarBim1(100)*/
