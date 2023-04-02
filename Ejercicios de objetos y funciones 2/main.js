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

const upperCaseKeys = obj => {
    let newObj = {};
    for (let key in obj) {
        newObj[key.toUpperCase()] = obj[key];
    }
    return newObj;
}

console.log(upperCaseKeys(reloj));

// Escribe una función que tome un objeto y devuelva un nuevo objeto con los valores en mayúsculas (si son strings).

const upperCaseValues = obj => {
    let newObj = {};
    for (let key in obj) {
        (typeof obj[key] === 'string')
            ? newObj[key] = obj[key].toUpperCase()
            : newObj[key] = obj[key];
    }
    return newObj;
}

console.log(upperCaseValues(reloj));


// Escribe una función que tome un objeto y una clave específica y devuelva true si el valor asociado a esa clave es un array o false si no lo es.

const isArray = (obj, key) => {
    if (!obj.hasOwnProperty(key)) return "La clave no existe en el objeto"
    return obj[key] instanceof Array
}

console.log(isArray(reloj, 'marca')); // false


// Escribe una función que tome un objeto y una clave específica y devuelva true si el valor asociado a esa clave es un objeto o false si no lo es.

const isObject = (obj, key) => {
    if (!obj.hasOwnProperty(key)) return 'La clave no existe en el objeto'
    if (obj[key] instanceof Array) return false
    return obj[key] instanceof Object
}

console.log(isObject(persona, 'contacto')); // true


// Escribe una función que tome dos objetos como argumentos y devuelva true si tienen las mismas propiedades y valores o false si no.

function ordenarObjeto(obj) {
    return Object.keys(obj).sort().reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {})
}

const isEqual = (obj1, obj2) => {
    const newObj1 = ordenarObjeto(obj1)
    const newObj2 = ordenarObjeto(obj2)

    return JSON.stringify(newObj1) === JSON.stringify(newObj2);
}

console.log(isEqual(reloj, reloj2)); // true

// function compararObjetos(obj1, obj2) {
//     // Obtener las claves de los objetos
//     const clavesObj1 = Object.keys(obj1);
//     const clavesObj2 = Object.keys(obj2);

//     // Verificar si el número de claves es el mismo
//     if (clavesObj1.length !== clavesObj2.length) {
//         return false;
//     }

//     // Verificar si todas las claves y valores son iguales
//     for (const clave of clavesObj1) {
//         if (obj1[clave] !== obj2[clave]) {
//             return false;
//         }
//     }

//     // Si todas las verificaciones pasaron, devolver verdadero
//     return true;
// }


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

    return divisoresArray.reduce((accumulator, currentValue) =>
        accumulator + currentValue
    )
}

console.log(addAllDivisible(78)); // 90



// Escribe una función que tome dos números como argumentos y devuelva su máximo común divisor (MCD).

function MCD(a, b) {
    if (b == 0) {
        return a;
    } else {
        return MCD(b, a % b);
    }
}

console.log(MCD(48, 60)) // 12


// Escribe una función que tome dos números como argumentos y devuelva su mínimo común múltiplo (mcm).

const mcm = (a, b) => (a * b) / MCD(a, b);

console.log(mcm(6, 7)); // 42


// Escribe una función que tome un número como argumento y devuelva la cantidad de dígitos del número.

const digitos = num => num.toString().length.toString().concat(" digitos")

console.log(digitos(7985));


// Escribe una función que tome dos números como argumentos (base and exponente) and devuelve la potencia del primer número elevado al segundo número.

const potencia = (base, exp) => Math.pow(base, exp)

console.log(potencia(4, 2)); // 16


// Escribe una función que tome dos números como argumentos y devuelva su producto.

const producto = (num1, num2) => num1 * num2

console.log(producto(5, 5)); // 25


// Escribe una función que tome dos números como argumentos y devuelva su cociente.

const cociente = (num1, num2) => num1 / num2
console.log(cociente(7, 2)); // 3.5


// Escribe una función que tome dos números como argumentos y devuelva su resto (módulo).

const modulo = (num1, num2) => num1 % num2
console.log(modulo(10, 5)); // 0


// Escribe una función que tome un número como argumento y devuelva true si el número es par o false si es impar.

const isPar = num => num % 2 === 0
console.log(isPar(5)); // false


// Escribe una función que tome un número como argumento y devuelva true si el número es positivo o false si es negativo.

const isPositive = num => num >= 0
console.log(isPositive(1)); // true


// Escribe una función que tome dos números como argumentos (base and exponente) and devuelve la raíz del primer número elevado al segundo número.

const potenciaDeRaiz = (base, exp) => Math.pow(Math.sqrt(base), exp)
console.log(potenciaDeRaiz(8, 2)); // 8


// Escribe una función que tome dos números como argumentos y devuelva su promedio.

const promedio = (num1, num2) => (num1 + num2) / 2
console.log(promedio(8, 10)); // 9


// Escribe una función que tome tres números como argumentos y devuelva su promedio.

const promedio2 = (num1 = 0, num2 = 0, num3 = 0) => (num1 + num2 + num3) / 3
console.log(promedio2(8, 10, 8)); // 8.67


// Escribe una función que tome un array de números como argumento y devuelva su promedio.

const arrPromedio = arr => {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    ) / arr.length
}

console.log(arrPromedio([5, 5, 7, 8, 9])); // 6.8


// Escribe una función que tome un número como argumento y devuelva la suma de todos sus dígitos.

const suma_de_digitos = num => {
    return num.toString().split("").map(element =>
        parseInt(element)).reduce(
            (accumulator, currentValue) => accumulator + currentValue
        )
}

console.log(suma_de_digitos(45875)); // 29


// Escribe una función que tome dos números como argumentos (base and exponente) and devuelve el logaritmo del primer número en base al segundo número.

function logaritmo(base, exponente) {
    return Math.log(base) / Math.log(exponente);
}

console.log(logaritmo(13, 5)); // 1.59.....