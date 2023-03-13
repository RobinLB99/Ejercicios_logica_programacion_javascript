/* Programa una funcion que cuente el numero de caracteres de una cadena de texto, pe. miFuncion("Hola mundo") devolvera 10 */

const contCaracters = (cadena) => {
    console.log(cadena.length)
}

contCaracters("Hola mundo") // 10

/* Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, pe. miFuncion("Hola mundo", 4) devolvera "Hola" */

const cutText = (cadena, numCaracteres) => {
    console.log(cadena.slice(0, numCaracteres))
}

cutText("hola mundo", 4)


/* Programa una funcion que dada una String te devuelva un array de textos sepaprados por cierto caracter, pe. miFuncion("Hola que tal"," ") devolvera 'hola' 'que' 'tal' */

const arrStrings = (cadena, separacion) => {
    console.log(cadena.split(separacion))
}

arrStrings("Hola que tal", " ")