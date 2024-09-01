function sumarElementos(arreglo){
    return res = arreglo.reduce((a,b)=>a+b,0);
}

console.log(sumarElementos([1,2,3,4,5]));