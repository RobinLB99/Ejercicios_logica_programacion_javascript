// Aquí hay una lista de 20 ejercicios básicos para practicar asincronía con JavaScript: ----------------------------------------------------------------------

// Crear una función que devuelva una promesa que se resuelva después de un tiempo determinado.
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(peliculas)
        }, 5000)
    })
}

getDatos()
    .then(datos => console.log(datos))



// Crear una función que devuelva una promesa que se rechace después de un tiempo determinado.

const getDatos2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(peliculas)
        }, 3000)
    })
}

getDatos2()
    .catch(error => console.log(error))



// Crear una función que use setTimeout para imprimir un mensaje después de un tiempo determinado.

const printMessage = () => {
    return setTimeout(() => {
        console.log('Este es un mensaje por consola!');
    }, 1500)
}

printMessage()


// Crear una función que use setInterval para imprimir un mensaje cada cierto tiempo.


// Crear una función que use Promise.all para esperar a que varias promesas se resuelvan.


// Crear una función que use Promise.race para esperar a que la primera de varias promesas se resuelva.


// Crear una función que use async/await para esperar a que una promesa se resuelva.


// Crear una función que use async/await y un bucle for para esperar a que varias promesas se resuelvan en secuencia.


// Crear una función que use async/await y Promise.all para esperar a que varias promesas se resuelvan en paralelo.


// Crear una función que use fetch para obtener datos de una API y luego procese los datos recibidos.


// Crear una función que use XMLHttpRequest para obtener datos de una API y luego procese los datos recibidos.


// Crear una función que maneje errores al obtener datos de una API usando fetch.


// Crear una función que maneje errores al obtener datos de una API usando XMLHttpRequest.


// Crear una función que cancele una solicitud en curso usando AbortController.


// Crear un ejemplo de código que muestre cómo usar Promise.resolve.


// Crear un ejemplo de código que muestre cómo usar Promise.reject.


// Crear un ejemplo de código que muestre cómo encadenar varias promesas usando .then


// Crear un ejemplo de código que muestre cómo manejar errores en una cadena de promesas usando .catch


// Crear un ejemplo de código que muestre cómo usar el método .finally en una cadena de promesas.


// Crear un ejemplo de código que muestre cómo crear y usar un objeto Promise.

