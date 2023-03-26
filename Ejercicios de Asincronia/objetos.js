const peliculas = [
    {
        titulo: 'El Padrino', anio: 1972, director: 'Francis Ford Coppola', genero: ['Crimen', 'Drama'],
        actores: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        puntuacion: 9.2,
        sinopsis: 'El patriarca de una familia de la mafia traslada el control de su imperio clandestino a su hijo más joven.'
    },
    {
        titulo: 'Forrest Gump',
        anio: 1994,
        director: 'Robert Zemeckis',
        genero: ['Drama', 'Romance'],
        actores: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        puntuacion: 8.8,
        sinopsis: 'Un hombre simple de mente, pero con un corazón grande, relata sus aventuras a través de la historia de los Estados Unidos.'
    },
    {
        titulo: 'El caballero de la noche',
        anio: 2008,
        director: 'Christopher Nolan',
        genero: ['Acción', 'Drama', 'Crimen'],
        actores: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        puntuacion: 9.0,
        sinopsis: 'Batman debe enfrentarse al Joker, un psicópata criminal que aterroriza Gotham City.'
    },
    {
        titulo: 'El señor de los anillos: El retorno del rey',
        anio: 2003,
        director: 'Peter Jackson',
        genero: ['Aventura', 'Drama', 'Fantasía'],
        actores: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
        puntuacion: 9.0,
        sinopsis: 'El grupo de amigos se une para destruir el anillo que amenaza con esclavizar a toda la Tierra Media.'
    },
    {
        titulo: 'La lista de Schindler',
        anio: 1993,
        director: 'Steven Spielberg',
        genero: ['Biografía', 'Drama', 'Historia'],
        actores: ['Liam Neeson', 'Ben Kingsley', 'Ralph Fiennes'],
        puntuacion: 8.9,
        sinopsis: 'La historia real de Oskar Schindler, quien salvó a más de mil judíos de los campos de concentración nazis.'
    }
];

const promesas = [
    new Promise((resolve, reject) => setTimeout(() => resolve('Promesa 1'), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('Promesa 2'), 7000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('Promesa 3'), 4000))
]
