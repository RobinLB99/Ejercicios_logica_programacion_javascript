// Aquí hay una lista de ejercicios con un estilo de prueba técnica para practicar arrays y sus métodos en JavaScript:

// 1. Dado un array de números enteros, escribe una función que devuelva el segundo elemento más grande del array.

const secondMax = function(arr) {
    let arr1 = arr.slice().sort()
    arr1.pop()
    return Math.max(...arr1)
}

console.log(secondMax([5, 7, 8, 1, 3, 9, 4])); // 8


// 2. Dado un array de cadenas, escribe una función que devuelva la cadena más larga del array.

// Devuelve un Array o String ordenado por su longitud.
Array.prototype.sortByLength = function() {
    return this.slice().sort( (a, b) => a.length - b.length )
}

const arrStrings = [ 'fFH99Iw19A7', 'KkHz8Nt6', 'cm', 'BzJdxQMS9', 'DOE' ]

const cadenaMasLarga = function(arr) {
    return arr.sortByLength().pop()
}

console.log(cadenaMasLarga(arrStrings));


// 3. Dado un array de números enteros y un número entero n, escribe una función que devuelva el número de veces que n aparece en el array.

const nVecesEnArray = function(arr, n) {
    let veces = 0
    arr.forEach(element => {
        if (element === n) veces += 1
    })
    return veces
}

console.log( nVecesEnArray( [1, 5, 8, 8, 9, 4, 1, 6, 8, 9, 8], 8 ) ); // 4


// 4. Dado un array de números enteros y un número entero k, escribe una función que devuelva true si hay dos elementos en el array cuya suma sea igual a k o false si no los hay.

const twoInArray = (arr, k) => arr.some( (a, i) => arr.slice(i + 1).includes(k - a) )

console.log(twoInArray([1, 5, 8, 8, 9, 4, 1, 6, 8, 9, 8], 8));


//Aquí hay una lista de ejercicios con un estilo de prueba técnica para practicar strings y sus métodos en JavaScript:


// 1. Dada una cadena, escribe una función que devuelva la cantidad de vocales en la cadena.

// const nVocales = function(cadena) {
//     let vocales = 0
//     cadena.split("").forEach(element => {
//         if (/[aeiouAEIOU]/.test(element)) vocales += 1
//     })
//     return vocales
// }
const nVocales = cadena => (cadena.match(/[aeiouAEIOU]/g) || []).length;

console.log(nVocales('Hola mundo! Esto es una cadena de texto'));


// 2. Dada una cadena, escribe una función que devuelva la cantidad de palabras en la cadena (separadas por espacios).


// 3. Dada una cadena y un carácter específico, escribe una función que devuelva cuántas veces aparece ese carácter en la cadena.



// Finalmente, aquí hay algunos ejercicios con un estilo de prueba técnica que combinan tanto arrays como strings:


// 1. Dado un array de cadenas y un carácter específico, escribe una función que devuelva cuántas veces aparece ese carácter en todas las cadenas del array.


// 2. Dado un string y dos caracteres específicos a y b, escribe una función que reemplace todas las apariciones del carácter a por el carácter b.