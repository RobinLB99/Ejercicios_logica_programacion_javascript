/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const vocalesConsonantes = function(texto) {
    const vocales = /[aeiouAEIOU]/
    const consonantes = /[^aeiouAEIOU\s\d]/

    let voc = 0, cons = 0;

    let arr = texto.split("")

    arr.forEach(element => {
        if (vocales.test(element)) voc += 1;
        if (consonantes.test(element)) cons += 1
    });

    arr = []

    return `Vocales: ${voc}, Consonantes: ${cons}`
}

console.log(vocalesConsonantes("Hola mundo")); // Vocales: 4, Consonantes: 5

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validName = function(name) {
    const expReg = /^[A-Za-z]+(?:\s[A-Za-z]+)?\s[A-Za-z]+$/

    if (expReg.test(name)) return 'Nombre valido'
    return 'Nombre invalido'
}

console.log(validName("Robin Lugo")); // true

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validEmail = function(email) {
    const expReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (expReg.test(email)) return 'Correo valido'
    return 'Correo invalido'
}

console.log(validEmail("juanperez19@outlook.com"));