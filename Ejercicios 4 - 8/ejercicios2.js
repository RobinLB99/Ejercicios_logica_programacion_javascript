/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirTexto = (cadena) => {
    console.log(cadena.split("").reverse().join(""));
}

invertirTexto('hola Mundo') // odnuM aloh


/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const contWordRepeat = (cadena, palabra) => {
    let cont = 0
    cadena.split(" ").forEach(element => {
        if (element === palabra) {
            cont += 1
        }
    })
    return console.log(cont);
}

contWordRepeat("hola mundo adios mundo", "mundo") // 2


/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palindromo = (palabra) => {
    let reverse = palabra.toLowerCase().split("").reverse().join("")

    if (reverse === palabra.toLowerCase()) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindromo('Salas')

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

function eliminarPatron(cadena = "", patron = "") {
    console.log(cadena.replaceAll(patron, ""));
}

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")