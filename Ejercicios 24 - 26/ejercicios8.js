/* 24. Programa una funcion que dado un arreglo de numeros devuelta un objeto con dos arreglos, el primero tendra los numeros ordenados acendente y el otro de forma descenciente, pe. miFuncion([7,5,7,8,6]) devolvera {asc: [5,6,7,7,8], desc: [8,7,7,6,5]} */

const ordenamiento = function(arr) {
    const ascendente = arr.slice().sort()
    const descendente = arr.slice().sort().reverse()

    return {asc: ascendente, desc: descendente}
}

console.log(ordenamiento([7,5,7,8,6]));

/* 25. Programa una funcion que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x",10,"x",2,"10",10,true,true]) devolvera ["x",10,2,"10",true] */

const sinDuplicados = function(arr) {
    return [...new Set(arr)]
}

console.log(sinDuplicados(["x",10,"x",2,"10",10,true,true])); // ["x",10,2,"10",true]


/* 26. Programa una funcion que dado un arreglo de numeros obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolvera 4.5 */

const promedio = function(arr) {
    return arr.reduce((acumulador, numero) => {
        return acumulador + numero
    }) / arr.length
}

console.log(promedio([9,8,7,6,5,4,3,2,1,0]));