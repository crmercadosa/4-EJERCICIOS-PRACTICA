function promesaSuma(a,b){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    });
}

async function asincrona() {
    console.log(`Esperando`);
    const resultado = await promesaSuma(2,3);
    console.log(resultado);
}

asincrona();