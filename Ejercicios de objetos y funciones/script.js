/* Ejercicios de objetos en JavaScript: -------------------------------------------*/

// 1. Dado un objeto con propiedades y valores, escribe una función que devuelva un array con todas las claves del objeto.

const clavesObjeto = obj => Object.keys(obj)

console.log(clavesObjeto(coche));
console.log(clavesObjeto(libro));
console.log(clavesObjeto(reloj));


// 2. Dado un objeto con propiedades y valores, escribe una función que devuelva un array con todos los valores del objeto.

const allValuesObject = (objeto) => Object.values(objeto)

console.log(allValuesObject(coche));
console.log(allValuesObject(libro));
console.log(allValuesObject(reloj));


// 3. Dado un objeto y una clave específica, escribe una función que devuelva el valor asociado a esa clave en el objeto.

const valueKeyObject = (object, key) =>
    object.hasOwnProperty(key) ? object[key] : "No la propiedad en el objecto"

console.log(valueKeyObject(coche, "color"));
console.log(valueKeyObject(reloj, "marca"));
console.log(valueKeyObject(libro, "titulo"));


/* Ejercicios de funciones en JavaScript: -------------------------------------------*/

// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

const suma = (a, b) => a + b

console.log(suma(5, 8));

// 2. Escribe una función que tome un número como argumento y devuelva su factorial (n!).
// const factorial = (num) => {
//     let factorial = num;
//     for (let i = num - 1; i >= 1; i--) {
//         factorial *= i
//     }
//     return factorial
// }

const factorial = (num) => num === 0 ? 1 : num * factorial(num - 1)

console.log(factorial(8));

// 3. Escribe una función que tome un número como argumento y devuelva true si el número es primo o false si no lo es.

const primo = (num) => {
    if (num <= 1) return 'No es primo';
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return 'No es primo';
    }
    return 'Es primo';
}

console.log(primo(28));