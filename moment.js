const moment = require('moment');
function diferenciaDias(fecha1, fecha2) {
    const a = moment(fecha1);
    const b = moment(fecha2);
    return b.diff(a, 'days');
}
console.log(diferenciaDias("2024-08-01", "2024-08-30")); 
