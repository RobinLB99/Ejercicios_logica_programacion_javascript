/* Ejercicios de objetos en JavaScript: -------------------------------------------*/
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "rojo",
    kilometraje: 15000,
    encendido: false,
    arrancar: function() {
        if (this.encendido) {
            console.log("El coche ya está encendido.");
        } else {
            this.encendido = true;
            console.log("El coche se ha encendido.");
        }
    },
    apagar: function() {
        if (this.encendido) {
            this.encendido = false;
            console.log("El coche se ha apagado.");
        } else {
            console.log("El coche ya está apagado.");
        }
    },
    conducir: function(km) {
        if (this.encendido) {
            this.kilometraje += km;
            console.log("Has conducido " + km + " kilómetros. El coche tiene ahora " + this.kilometraje + " kilómetros.");
        } else {
            console.log("No puedes conducir si el coche está apagado. Arráncalo primero.");
        }
    }
};

// 1. Dado un objeto con propiedades y valores, escribe una función que devuelva un array con todas las claves del objeto.

const clavesObjeto = obj => Object.keys(obj)

console.log(clavesObjeto(coche));

// 2. Dado un objeto con propiedades y valores, escribe una función que devuelva un array con todos los valores del objeto.

// 3. Dado un objeto y una clave específica, escribe una función que devuelva el valor asociado a esa clave en el objeto.


/* Ejercicios de funciones en JavaScript: -------------------------------------------*/

// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

// 2. Escribe una función que tome un número como argumento y devuelva su factorial (n!).

// 3. Escribe una función que tome un número como argumento y devuelva true si el número es primo o false si no lo es.