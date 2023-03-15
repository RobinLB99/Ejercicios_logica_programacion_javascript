/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

const conversionBase = function(num, base) {
    if (base === 2) {
        return parseInt(num.toString(), 2).toString().concat(' base 10')
    } else if (base === 10) {
        return num.toString(2).concat(' base 2')
    }
}

console.log(conversionBase(100, 2));


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad
dada, pe. miFuncion(1000, 20) devolverá 800. */

const conDescuento = function(precio, descuento) {
    return precio - (precio * (descuento / 100))
}

console.log(conDescuento(1000, 20));


/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1999,10,2)) devolverá 23 años (hasta el 26 de octubre del 2023). */

const añosTrasncurridos = function(fecha) {
    return parseInt((new Date() - fecha) / 31536000000)
}

console.log(añosTrasncurridos(new Date(1999, 10, 2))) // 23

// NOTA: Las fechas se las cuenta en milisegundos.
