/* Ejercicios de objetos en JavaScript: ------------------------------------------ */

// Dado un objeto y una clave específica, escribe una función que agregue un nuevo valor a esa clave en el objeto.

const newValue = (objeto, clave, valor) => {
    let arr = []
    if (objeto.hasOwnProperty(clave)) {
        arr.push(objeto[clave], valor)
        objeto[clave] = arr
        console.info('Valor ingresado con exito');
    } else console.warn('Clave no encontrada!');
}

console.log(`El valor de la propiedad color del objeto reloj es: ${reloj.color}`);
// negro
newValue(reloj, 'color', 'azul');

console.log(`Los valores actuales de la propiedad color del objeto reloj es: ${reloj.color}`); // [negro, azul]


// Dado un objeto y una clave específica, escribe una función que actualice el valor asociado a esa clave en el objeto.

const updateValue = (objeto, clave, valor) => {
    if (objeto.hasOwnProperty(clave)) {
        objeto[clave] = valor
        console.info('Valor actualizado con exito!');
    } else console.warn('Clave no encontrada!');
}

console.log(`El valor de clave paginas del objeto libro es: ${libro.paginas}`);
// paginas: 96

updateValue(libro, 'paginas', 102)

console.log(`El nuevo valor de clave paginas del objeto libro es: ${libro.paginas}`);
//paginas: 102


// Escribe una función que tome dos objetos como argumentos y devuelva un nuevo objeto que combine las propiedades de ambos.

let mergedObject;

const fusionObject = (object1, object2) => {
    mergedObject = JSON.parse(JSON.stringify(object1));
    Object.assign(mergedObject, JSON.parse(JSON.stringify(object2)));
}

fusionObject(libro, coche);
console.log(mergedObject);


// Escribe una función que tome un objeto como argumento y devuelva un nuevo objeto con las claves y valores intercambiados (las claves se convierten en valores y viceversa).

const invertKeysValues = object => {
    let objetInvert = {}

    for (let key in object) {
        objetInvert[object[key]] = key
    }

    return objetInvert;
}

console.log(invertKeysValues(libro));


// Escribe una función que tome un array de objetos y una clave específica, y devuelva un nuevo array con los valores asociados a esa clave en cada uno de los objetos.

const obtenerValores = (arr, key) => {
    const array = []
    arr.forEach(element => array.push(element[key]))
    return array
}

console.log(obtenerValores(personas, "nombre")); //['Juan', 'María', 'Pedro']


// Escribe una función que tome un objeto y una clave específica y devuelva true si el valor asociado a esa clave es un número o false si no lo es.

const isNumber = (arr, key) => {
    if (arr.hasOwnProperty(key)) return typeof arr[key] === "number"
    return 'No existe esa clave'
}

console.log(isNumber(persona, 'edad'));


// Escribe una función que tome un objeto y una clave específica y devuelva true si el valor asociado a esa clave es un string o false si no lo es.

const keyValueIsString = (object, key) => {
    if (!object.hasOwnProperty(key)) return 'La clave no existe en el objecto'
    return typeof object[key] === 'string'
}

console.log(keyValueIsString(persona, 'nombre')); // true


// Escribe una función que tome un objeto y devuelva un nuevo objeto con las claves ordenadas alfabéticamente.

const orderedObj = (obj) => Object.keys(obj).sort().reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

console.log(orderedObj(persona));


// Escribe una función que tome un objeto y devuelva la cantidad de propiedades que tiene.
const numKeysInObject = obj => Object.keys(obj).length

console.log(numKeysInObject(reloj)); // 5


// Escribe una función que tome un objeto y devuelva un nuevo objeto con las claves en mayúsculas.

// const keysToUpperCase = obj => {
//     const keysUpper =  Object.keys(obj).map(element => element.toUpperCase())
//     const keysValues = Object.values(obj)

//     let KeysUpperCase = {}

//     for (let i = 0; i < Object.keys(obj).length; i++) {
//         KeysUpperCase[keysUpper[i]] = keysValues[i]
//     }

//     return console.log(KeysUpperCase);
// }

const upperCaseKeys = obj => {
    let newObj = {};
    for (let key in obj) {
      newObj[key.toUpperCase()] = obj[key];
    }
    return newObj;
  }

console.log(upperCaseKeys(reloj));

// Escribe una función que tome un objeto y devuelva un nuevo objeto con los valores en mayúsculas (si son strings).

// Escribe una función que tome un objeto y una clave específica y devuelva true si el valor asociado a esa clave es un array o false si no lo es.

// Escribe una función que tome un objeto y una clave específica y devuelva true si el valor asociado a esa clave es un objeto o false si no lo es.

// Escribe una función que tome dos objetos como argumentos y devuelva true si tienen las mismas propiedades y valores o false si no.




/* Ejercicios de funciones en JavaScript: ------------------------------------------ */

// Escribe una función que tome tres números como argumentos y devuelva el mayor de los tres.
const numMax = (a, b, c) => Math.max(...[a, b, c])

console.log(numMax(5, 7, 2)); // 7


// Escribe una función que tome un string como argumento y devuelva true si el string es palíndromo (se lee igual al derecho y al revés) o false si no lo es.

const palindromo = string => {
    let arr = string.split("").reverse().join("")
    if (string === arr) return true
    return false
}

console.log(palindromo("salas")); // true


// Escribe una función que tome dos strings como argumentos y devuelva true si son anagramas (contienen las mismas letras pero en diferente orden) o false si no lo son.
const anagrama = (string1, string2) => {
    let arr1 = string1.split("").sort()
    let arr2 = string2.split("").sort()

    if (arr1.length !== arr2.length) return false;

    return arr1.every((element, index) => element === arr2[index])
}

console.log(anagrama("amor", "roma")); // true


// Escribe una función que tome un número como argumento y devuelva la suma de todos sus divisores (excluyendo al propio número).

const addAllDivisible = (num = 0) => {
    let factores = [];
    let divisor = 2;

    while (num > 2) {
        if (num % divisor == 0) {
            factores.push(divisor);
            num /= divisor;
        } else {
            divisor++;
        }
    }

    let divisoresArray = [1];

    for (let i = 0; i < factores.length; i++) {
        let len = divisoresArray.length;
        for (let j = 0; j < len; j++) {
            divisoresArray.push(divisoresArray[j] * factores[i]);
        }
    }

    divisoresArray.sort((a, b) => a - b).pop();

    return divisoresArray.reduce( (accumulator, currentValue) =>
        accumulator + currentValue
    )
}

console.log(addAllDivisible(78)); // 90



// Escribe una función que tome dos números como argumentos y devuelva su máximo común divisor (MCD).

function mcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return mcd(b, a % b);
    }
}

console.log(mcd(48, 60)) // 12


// Escribe una función que tome dos números como argumentos y devuelva su mínimo común múltiplo (mcm).

// Escribe una función que tome un número como argumento y devuelva la cantidad de dígitos del número.

// Escribe una función que tome dos números como argumentos (base and exponente) and devuelve la potencia del primer número elevado al segundo número.

// Escribe una función que tome dos números como argumentos y devuelva su producto.

// Escribe una función que tome dos números como argumentos y devuelva su cociente.

// Escribe una función que tome dos números como argumentos y devuelva su resto (módulo).

// Escribe una función que tome un número como argumento y devuelva true si el número es par o false si es impar.

// Escribe una función que tome un número como argumento y devuelva true si el número es positivo o false si es negativo.

// Escribe una función que tome dos números como argumentos (base and exponente) and devuelve la raíz del primer número elevado al segundo número.

// Escribe una función que tome dos números como argumentos y devuelva su promedio.

// Escribe una función que tome tres números como argumentos y devuelva su promedio.

// Escribe una función que tome un array de números como argumento y devuelva su promedio.

// Escribe una función que tome un número como argumento y devuelva la suma de todos sus dígitos.

// Escribe una función que tome dos números como argumentos (base and exponente) and devuelve el logaritmo del primer número en base al segundo número.