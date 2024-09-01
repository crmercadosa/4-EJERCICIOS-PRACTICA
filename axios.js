const axios = require('axios');
function obtenerUsuarios() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            response.data.forEach(user => {
                console.log(user.name);
            });
        })
        .catch(error => console.error('Error:', error));
}
obtenerUsuarios();
