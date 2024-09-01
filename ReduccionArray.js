function ContarCaracteres(array){
    return res = array.reduce((a,b)=>a+b.lenght(),0);
}

const array = ["Hola","Mundo"];
console.log(ContarCaracteres(array));