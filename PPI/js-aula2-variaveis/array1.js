let fa = [92.0, 70.0, 20.5, 50.0];
console.log(`Bim3: ${fa[2]}`);
fa[2] = 61.0;
console.log(fa);

let mp = (2*fa[0] + 2*fa[1] + 3*fa[2] + 3*fa[3])/10;
fa.push(mp);
console.log(fa);
/*
                          EXPLICAÇÃO
    O método push coloca o valor recebido para a última posição do array
            
*/
let fa1 = {
    "b1" : 92.0,
    "b2" : 70.0,
    "b3" : 20.5,
    "b4" : 50.0,
    "mp" : mp
}
console.log(fa1);
document.write(JSON.stringify(fa1))