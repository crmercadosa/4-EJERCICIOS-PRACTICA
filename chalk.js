const chalk = require('chalk');
function imprimirMensajeColoreado(mensaje, color) {
    console.log(chalk[color](mensaje));
}
imprimirMensajeColoreado('Hola, mundo!', 'blue'); 
imprimirMensajeColoreado('Error crítico!', 'red'); 
