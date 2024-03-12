function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, tipo Cliente:${this.tipoCliente()}`
}
Cliente.prototype.retirarSaldo = function(retira){
    this.saldo -= retira
}

function Persona(nombre,saldo,telefono){
    Cliente.call(this, nombre, telefono);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;


// Instanciarlo
const arnold = new Persona('Arnold',5000, 919543397);
console.log(arnold);
console.log(arnold.nombreClienteSaldo());


Persona.prototype.mostrarTelefono = function(){
    return  `El telefono de esta persona es ${this.telefono}`
}

console.log(arnold.mostrarTelefono())