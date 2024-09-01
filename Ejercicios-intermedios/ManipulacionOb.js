const persona = {
    nombre: "Pedro",
    edad: 45,
    ciudad: "Tepic",
    imprimirInfo: function (){
        console.log("Soy " + this.nombre + " tengo " + this.edad + " anos y vivo en " + this.ciudad);
    }
}

persona.imprimirInfo();