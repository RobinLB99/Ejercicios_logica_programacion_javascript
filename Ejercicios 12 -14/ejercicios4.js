/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const esPrimo = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(7));

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const parImpar = function(num) {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(parImpar(29)) // Impar

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

const convertirGrados = function(grados, medida) {
    if (medida === "C") {
        return ((grados * 1.8) + 32).toString().concat('ºF')
    } else if (medida === "F") {
        return ((grados - 32) / 1.8).toString().concat('ºC')
    } else {
        return 'Medida invalida'
    }
}

console.log(convertirGrados(0, "C"));