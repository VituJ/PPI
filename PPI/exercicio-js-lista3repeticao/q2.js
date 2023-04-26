let array = [25, 49, 7, 4, 17, 44, 11, 23, 5, 1];
let x = 1;
document.write(`<h2>A lista desordenada corresponde a: ${array}</h2>`);
while (x < array.length){
    y = array[x];
    z = x-1;
    while(z >= 0 && array[z] > y){
        array[z+1] = array[z];
        z-=1; 
    }
    array[z+1] = y
    x += 1;
}
document.write(`<h2>A lista ordenada corresponde a: ${array}</h2>`)