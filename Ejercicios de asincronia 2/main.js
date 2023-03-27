// 1. Crear una promesa que resuelva después de un tiempo determinado utilizando setTimeout().

const newPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        return resolve('Hola mundo')
    }, 5000)
})

newPromise
    .then(data => console.log(data)); // Hola mundo



// 2. Crear una función asincrónica que llame a una API y devuelva los resultados en formato JSON.

async function myAsyncFunction() {
    try {
        const response = await fetch('https://api.spacexdata.com/v3/launches/5')
        const data = await response.json()
        return data;
        // return console.log(data);
    } catch (error) {
        console.error(error.message)
    }
}

myAsyncFunction()
    .then(data => console.log(data))


// 3. Crear una función asincrónica que lea un archivo desde el sistema de archivos y devuelva el contenido como una cadena.

async function readFileText() {
    try {
        let fileInput = document.getElementById('file-input');
        let file = await fileInput.files[0];
        let fileReader = new FileReader()

        return new Promise((resolve, reject) => {
            fileReader.onload = () => {
                const contenidoArchivo = fileReader.result;
                resolve(contenidoArchivo.toString());
            };

            fileReader.onerror = () => {
                reject(new Error('Error al leer el archivo'));
            };

            fileReader.readAsText(file);
        });
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

const btn_cargarArchivo = document.getElementById('enviar')
btn_cargarArchivo.addEventListener('click', function () {
    readFileText()
        .then(data => document.write(data))
        .catch(error => console.error(error));
})


// 4. Crear una promesa que se rechace después de un tiempo determinado utilizando setTimeout().

const otherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject(new Object({marca: "Toyota", modelo: "4x4"}))
    }, 3000);
})

otherPromise
    .then(data => console.log(data))
    .catch(error => console.error('Promeza rechazada', error))



// 5. Crear una función asincrónica que genere un número aleatorio y lo devuelva después de un tiempo determinado utilizando setTimeout().

async function generarNumeroAleatorio() {
    // generar un número aleatorio entero entre 1 y 100
    const numero = Math.floor(Math.random() * 100) + 1;

    // esperar 3 segundos antes de devolver el número aleatorio
    await new Promise(resolve => setTimeout(resolve, 3000));

    return numero;
}

// ejemplo de uso de la función asincrónica
async function ejemplo() {
    const numero = await generarNumeroAleatorio();
    return numero
}

ejemplo()
    .then(numero => console.log(`El número generado aleatoriamente es: ${numero}`))



// 6. Crear una función asincrónica que haga múltiples solicitudes a una API y devuelva los resultados en un arreglo.

const URLS = ['https://api.spacexdata.com/v3/rockets/falcon1', 'https://api.spacexdata.com/v3/rockets/falcon9', 'https://api.spacexdata.com/v3/rockets/falconheavy'];

async function multipleFetchingAPI (URLs) {
    try {
        const responses = await Promise.all(URLs.map(url => fetch(url)))
        const datosPedidos = await Promise.all(responses.map(response => response.json()))
        console.log('Los datos se colocaron en el arreglo')
        return datosPedidos
    } catch (error) {
        console.log(error.message)
    }
}

multipleFetchingAPI(URLS)
    .then(datos => console.log(datos))


// 7. Crear una función asincrónica que haga múltiples solicitudes a diferentes APIs y devuelva los resultados en un arreglo.


// 8. Crear una promesa que se resuelva si el usuario hace clic en un botón utilizando el evento click.


// 9. Crear una promesa que se resuelva si el usuario escribe algo en un campo de entrada utilizando el evento input.


// 10. Crear una función asincrónica que utilice fetch() para llamar a una API y devuelva los resultados en formato JSON.


// 11. Crear una función asincrónica que utilice XMLHttpRequest para llamar a una API y devuelva los resultados en formato JSON.


// 12. Crear una función asincrónica que lea varios archivos desde el sistema de archivos y devuelva el contenido en un arreglo.


// 13. Crear una promesa que se resuelva si el usuario permite el acceso a su ubicación utilizando navigator.geolocation.


// 14. Crear una promesa que se resuelva si el usuario permite el acceso a su cámara utilizando navigator.mediaDevices.getUserMedia().


// 15. Crear una promesa que se resuelva si el usuario permite el acceso a su micrófono utilizando navigator.mediaDevices.getUserMedia().


// 16. Crear una función asincrónica que utilice WebSockets para recibir mensajes en tiempo real de un servidor.


// 17. Crear una función asincrónica que utilice WebSockets para enviar mensajes a un servidor en tiempo real.


// 18. Crear una promesa que se resuelva si una imagen se carga correctamente utilizando el evento load.


// 19. Crear una promesa que se resuelva si una imagen no se carga correctamente utilizando el evento error.


// 20. Crear una función asincrónica que utilice IndexedDB para almacenar y recuperar datos en una base de datos local.

