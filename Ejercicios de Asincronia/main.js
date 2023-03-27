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
    .then(datos => {
        console.info('getDatos() resuelto')
        console.log(datos)
    })



// Crear una función que devuelva una promesa que se rechace después de un tiempo determinado.

const getDatos2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(peliculas)
        }, 3000)
    })
}

getDatos2()
    .catch(() => console.error(`getDatos2() rechazado`))



// Crear una función que use setTimeout para imprimir un mensaje después de un tiempo determinado.

const printMessage = () => {
    return setTimeout(() => {
        console.log('Este es un mensaje por consola!');
    }, 1500)
}

printMessage()


// Crear una función que use setInterval para imprimir un mensaje cada cierto tiempo.

const printMessageConsole = () => {
    return setInterval(function () {
        console.log('Este es un mensaje cada 10 segundos')
    }, 10000)
}

let intervalID = printMessageConsole()

setTimeout(function () {
    clearInterval(intervalID);
}, 60000);

// Crear una función que use Promise.all para esperar a que varias promesas se resuelvan.

const isResolveAllPromise = (promise1, promise2) => {
    Promise.all([promise1, promise2])
        .then(() => console.log("Todas las promesas fueron resueltas"))
        .catch(() => console.error('Existen promesas no resueltas'))
}

isResolveAllPromise(getDatos(), getDatos2()) // getDatos2() tiene un reject. La funcion retornara un error en consola.


// Crear una función que use Promise.race para esperar a que la primera de varias promesas se resuelva.

const firstPromiseRevolve = arrPromise => {
    return Promise.race(arrPromise)
        .then(resultado => console.log(resultado))
        .catch(error => console.error(error))
}

firstPromiseRevolve(promesas) // primero


// Crear una función que use async/await para esperar a que una promesa se resuelva.

let promiseX = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Hecho!"), 6000)
});

async function myAsyncFunction(promise) {
    let resultado = await promise
    return console.log(resultado);
}

myAsyncFunction(promiseX)


// Crear una función que use async/await y un bucle for para esperar a que varias promesas se resuelvan en secuencia.

async function resolverPromesasEnSecuencia(promesas) {
    const resultados = [];

    for (let i = 0; i < promesas.length; i++) {
        try {
            const resultado = await promesas[i];
            resultados.push(resultado);
        } catch (error) {
            console.error(`Promesa '${error}' rechazada`);
        }
    }

    return console.log(resultados);
}

resolverPromesasEnSecuencia(promesas)


// Crear una función que use async/await y Promise.all para esperar a que varias promesas se resuelvan en paralelo.

async function isResolveAllPromiseInParallel(promesas) {
    try {
        const resultado = await Promise.all(promesas)
        console.log(resultado); // Con Promise.all(), no se ejecutara si alguna promesa es rechazada.
    } catch (error) {
        console.log(`Promesa '${error}' rechazada`)
    }
}

isResolveAllPromiseInParallel(promesas)


// Crear una función que use fetch para obtener datos de una API y luego procese los datos recibidos.

async function peticionDeUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        return console.log(users);
    } catch (error) {
        return console.error(error.message)
    }
}

peticionDeUsuarios()


// Crear una función que use XMLHttpRequest para obtener datos de una API y luego procese los datos recibidos.

const XMLHttpRequestFunction = url => {
    const peticion = new XMLHttpRequest()

    peticion.open('GET', url)
    peticion.send()

    peticion.addEventListener('load', function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.response)
            return console.log(data)
        }
    })
}

XMLHttpRequestFunction('https://jsonplaceholder.typicode.com/comments')


// Crear una función que maneje errores al obtener datos de una API usando fetch.

async function dataAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        const albums = await response.json()
        return console.log(albums);
    } catch (error) {
        return console.error(error.message)
    }
}

dataAlbums()


// Crear una función que maneje errores al obtener datos de una API usando XMLHttpRequest.

const getDataFromAPI = (url /* , onSuccess, onError */) => {
    const request = new XMLHttpRequest();

    request.addEventListener('load', function () {
        if (this.readyState === 4 && this.status === 200) {
            try {
                const data = JSON.parse(this.response);
                // onSuccess(data);
                console.log(data);
            } catch (error) {
                // onError(error);
                console.error(error.message);
            }
        } else {
            console.error('Request failed')
            // onError(new Error('Request failed'));
        }
    });

    request.addEventListener('error', function () {
        // onError(new Error('Network error'));
        console.error('Network error')
    });

    request.open('GET', url);
    request.send();
};

getDataFromAPI('https://jsonplaceholder.typicode.com/photos' /* ,
data => console.log(data),
error => console.error(error.message) */
);



// Crear una función que cancele una solicitud en curso usando AbortController.

const controller = new AbortController();
const signal = controller.signal;

async function data(url) {
    try {
        const response = await fetch(url, {signal})
        const datos = await response.json()
        console.log(datos);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request aborted');
        } else {
            console.error('Request failed', error);
        }
    }
}

data('https://jsonplaceholder.typicode.com/todos')
controller.abort();


// Crear un ejemplo de código que muestre cómo usar Promise.resolve.

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Promise.resolve() no permite trabajar un valor como una promesa. Si el paramertro es una promesa, entonces Promise.resolve() devuelve esa promesa.
        console.log(Promise.resolve(data));
        return console.log(data)
    } catch (error) {
        console.error(error.message);
    }
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')



// Crear un ejemplo de código que muestre cómo usar Promise.reject.

async function fetchData2(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            return console.log(data)
        } else {
            return Promise.reject(`Error al obtener los datos de la API`);
        }

    } catch (error) {
        console.error(error.message);
    }
}

fetchData2('https://jsonplaceholder.typicode.com/todos')


// Crear un ejemplo de código que muestre cómo encadenar varias promesas usando .then

fetch('https://jsonplaceholder.typicode.com/todos/3')
    .then(response => response.json())
    .then(data => {
        const arr = []
        for (const key in data) {
            arr.push(data[key])
        }
        return arr
    })
    .then(array => console.log(array))

// Crear un ejemplo de código que muestre cómo manejar errores en una cadena de promesas usando .catch

fetch()
    .then(response => response.json())
    .catch(error => console.error(error.message)) // Nunca entrara al .then() y dara error porque el dato que contiene la promesa en fetch() no es un json valido.

// Crear un ejemplo de código que muestre cómo usar el método .finally en una cadena de promesas.

fetch(promesas[0])
    .then(response => console.log(response))
    .catch(error => console.error(error.message))
    .finally(() => console.log('se termino la ejecucion del procesamiento de la promesa'))

// Crear un ejemplo de código que muestre cómo crear y usar un objeto Promise.

