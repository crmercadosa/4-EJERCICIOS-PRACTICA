const bcrypt = require('bcrypt');
const saltRounds = 10;
function encriptarContrasena(contrasena) {
    return bcrypt.hash(contrasena, saltRounds);
}
encriptarContrasena('holaaAaa4433').then(hash => {
    console.log(hash); 
});
