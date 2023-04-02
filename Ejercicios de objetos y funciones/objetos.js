const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "rojo",
    kilometraje: 15000,
    encendido: false,
    arrancar: function() {
        if (this.encendido) {
            console.log("El coche ya está encendido.");
        } else {
            this.encendido = true;
            console.log("El coche se ha encendido.");
        }
    },
    apagar: function() {
        if (this.encendido) {
            this.encendido = false;
            console.log("El coche se ha apagado.");
        } else {
            console.log("El coche ya está apagado.");
        }
    },
    conducir: function(km) {
        if (this.encendido) {
            this.kilometraje += km;
            console.log("Has conducido " + km + " kilómetros. El coche tiene ahora " + this.kilometraje + " kilómetros.");
        } else {
            console.log("No puedes conducir si el coche está apagado. Arráncalo primero.");
        }
    }
};

const libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    genero: "fantasía",
    paginas: 96,
    leido: false,
    leer: function() {
        if (this.leido) {
            console.log("Ya has leído este libro.");
        } else {
            this.leido = true;
            console.log("Has empezado a leer este libro.");
        }
    },
    resumen: function() {
        console.log("Este libro cuenta la historia de un niño que vive en un pequeño planeta con una rosa y viaja por el universo conociendo a diferentes personajes.");
    }
};

var reloj = {
    marca: "Casio",
    modelo: "G-Shock",
    color: "negro",
    hora: function() {
        return new Date().toLocaleTimeString();
    },
    alarma: function(tiempo) {
        setTimeout(function() {
            alert("¡Es la hora!");
        }, tiempo * 1000);
    }
};