/* 21. Escribe una funcion que dado un array numerico devuelva otro array con los numero elevados al cuadrado pe. miFuncion([1, 4, 5]) devolvera [1, 16, 25] */

const cuadrado = function(arr) {
    return arr.map(element => Math.pow(element, 2))
}

console.log(cuadrado([1, 4, 5])); //[1, 16, 25]

/* 22. Programa una funcion que dado un array devuelva el numero mas alto y el
mas bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolvera [99 , -60] */

const maxMin = function(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return [max, min]
}

console.log(maxMin([1, 4, 5, 99, -60])); //[-60, 99]

/* 23. Programa una funcion que dado un array de numeros devuelva un objeto con 2 arreglos en el primero almacena los numeros pares y en el segundo los impares,
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolvera {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const parImpar = function(arr) {
    const pares = arr.filter(element => element % 2 === 0)
    const impares = arr.filter(element => element % 2 !== 0)
    return {pares: pares, impares: impares}
}

console.log(parImpar([1,2,3,4,5,6,7,8,9,0]))