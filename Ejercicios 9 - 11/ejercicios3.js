/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

function aleatorio(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

aleatorio(501, 600)

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

function capicula(num) {
    let capicula = parseInt(num.toFixed().split("").reverse().join(""))
    num === capicula
        ?console.log(true)
        :console.log(false)
}

capicula(2002)


/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

function factorial(num) {
    let factorial = 1
    for(let i = 1; i<=num; i++) {
        factorial *= i
    }
    console.log(factorial);
}

factorial(5)
