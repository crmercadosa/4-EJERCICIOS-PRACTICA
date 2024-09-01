function operacion (callback){  
    console.log(callback(3,4))
}

function suma (a,b){
    var suma = a+b;
    return suma
}

operacion(suma);