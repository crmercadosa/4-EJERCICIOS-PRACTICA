function duplicarYfiltrar(arreglo){
let arreglo2 = [];
for (let i = 0; i < arreglo.length; i++) {
    arreglo2[i] = arreglo[i]*2;
}
return nums = arreglo2.filter((numero)=>numero>10);
}

let array = [1,6,4,7,8,3,10];
console.log(duplicarYfiltrar(array));