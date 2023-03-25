# Las promesas

Las promesas en JavaScript son objetos que representan la finalización o el fracaso de una operación asíncrona y su valor resultante. Las promesas permiten asociar funciones de devolución de llamada (callbacks) con el resultado de una acción asíncrona, evitando el anidamiento excesivo de callbacks que puede provocar el llamado "infierno de los callbacks" (callback hell). Las promesas también facilitan el encadenamiento de operaciones asíncronas seguidas, donde cada operación depende del resultado de la anterior.

Para crear una promesa en JavaScript se usa el constructor Promise, al que se le pasa una función que recibe dos parámetros: resolve y reject. Estos parámetros son funciones que se pueden invocar para indicar que la promesa se ha cumplido con éxito (resolve) o que ha fallado por algún motivo (reject). Por ejemplo:

```
const miPromesa = new Promise((resolve, reject) => {
  // Aquí va la lógica de la operación asíncrona
  if (todoBien) {
    resolve(valor); // Se indica que la promesa se ha cumplido con un valor
  } else {
    reject(error); // Se indica que la promesa ha fallado con un error
  }
});
```

Una promesa puede estar en uno de estos estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected). Cuando se crea una promesa, su estado inicial es pendiente. Cuando se invoca la función resolve, el estado pasa a cumplido y se ejecutan las funciones de devolución de llamada asociadas con el método then. Cuando se invoca la función reject, el estado pasa a rechazado y se ejecutan las funciones de devolución de llamada asociadas con el método catch.

Para usar una promesa, se pueden encadenar los métodos then y catch, que reciben como argumentos las funciones de devolución de llamada para los casos de éxito y error respectivamente. Estos métodos devuelven a su vez otra promesa, lo que permite seguir encadenando más operaciones asíncronas. Por ejemplo:

```
miPromesa
  .then((valor) => {
    // Aquí se recibe el valor de la promesa cumplida
    console.log("La promesa se ha cumplido con el valor " + valor);
    return otraOperacionAsincrona(valor); // Devuelve otra promesa
  })
  .catch((error) => {
    // Aquí se recibe el error de la promesa rechazada
    console.log("La promesa ha fallado con el error " + error);
  })
  .then((nuevoValor) => {
    // Aquí se recibe el valor de la segunda promesa cumplida
    console.log("La segunda promesa se ha cumplido con el valor " + nuevoValor);
  });
```

Las promesas en JavaScript son una herramienta muy útil para manejar el código asíncrono de forma más clara y elegante. Existen otras características y métodos relacionados con las promesas, como las funciones async/await, los métodos **Promise.all()**, **Promise.race()**, **Promise.resolve()** y **Promise.reject()**, que pueden consultarse en la documentación oficial  o en otros recursos .