class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    describir() {
        console.log(`Este auto es un ${this.marca} ${this.modelo} del año ${this.año}.`);
    }
}
const coche1 = new Coche("Toyota", "Supra", 1998);
const coche2 = new Coche("Honda", "Accord", 2008);

coche1.describir(); 
coche2.describir(); 
