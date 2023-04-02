/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
     7 restantes números
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros
     aceptados.
  - Crea un método estático que devuelva los géneros aceptados.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3
    instancias de la clase de forma automatizada e imprime la ficha técnica
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */


class Pelicula {
  constructor(id, titulo, director, estreno, p_origen, genero, calificacion) {
    this.id = id
    this.titulo = titulo
    this.director = director
    this.estreno = estreno
    this.p_origen = p_origen
    this.genero = genero
    this.calificacion = calificacion
  }

  static generosAceptados() {
    return `Los generos aceptados son: ${genresList.join(', ')}`
  }

  validarID() {
    if(/^[a-zA-Z]{2}\d{7}$/.test(this.id)) {
      return 'EL titulo es valido'
    }
    return 'Titulo invvalido'
  }

  validarTitulo() {
    if (/^.{0,100}$/.test(this.titulo)) {
      return 'Titulo valido'
    }
    return 'Titulo no valido'
  }

  validarDirector() {
    if (/^[a-zA-Z\s]{1,50}$/.test(this.director)) {
      return 'Nombre del director valido'
    }
    return 'Nombre del no valido'
  }

  validarAño() {
    if (/^\d{4}$/.test(this.estreno)) {
      return 'Año valido'
    }
    return 'Año invalido'
  }

  validarPaises() {
    if (typeof this.p_origen === 'object') {
      const paises = this.p_origen.join(',')

      if (/^[a-zA-Z\s,]+$/.test(paises)) {
        return 'Formato de paises valido'
      }
      return 'Formato de paises invalidos'

    } else {
      return 'El o los paises no son un objeto tipo arreglo'
    }
  }

  validarGeneros() {
    if (typeof this.genero === 'object') {
      if (this.genero.every(element => genresList.includes(element))) {
        return 'Los generos introducidos son generos validos'
      }
      return 'Los generos introduciodos no son generos validos'

    } else {
      return 'Los generos no fueron ingresados como arreglo'
    }
  }

  validarCalificacion() {
    if (/^(10(\.0)?|[1-9](\.\d)?|0(\.\d)?)$/.test(this.calificacion)) {
      return 'La pelicula tiene una clasificacion valida'
    }
    return 'La pelicual no tiene una calificacion valida'
  }

  fichaTecnica() {
    return `Ficha tecnica:\nID: ${this.id}\nTITULO: ${this.titulo}\nDIRECTOR: ${this.director}\nESTRENO: ${this.estreno}\nPAIS: ${this.p_origen}\nGENERO: ${this.genero}\nCALIFICACION: ${this.calificacion}`
  }

}

const genresList = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror","Musical","Music","Mystery" ,"News" ,"Reality-TV" ,"Romance" ,"Sci-Fi" ,"Short" ,"Sport" ,"Talk-Show","Thriller" ,"War" ,"Western"];


const peliculas = [
  new Pelicula("tt0418279", "Transformers", 'Michael Bay', '2007', ['Estados Unidos'], ['Sci-Fi', 'Action'], '7.3'),
  new Pelicula("tt0145487", "Spider-Man", "Sam Raimi", "2002", ["Estados Unidos"], ["Action", "Adventure"], "7.3"),
  new Pelicula("tt1375666", "Inception", "Christopher Nolan", "2010", ["Estados Unidos", "Reino Unido"], ["Action", "Adventure", "Sci-Fi"], "8.8")
]


console.log(Pelicula.generosAceptados());
peliculas.forEach(element => console.log(element.fichaTecnica()))

// peliculas.forEach(element => {
//   console.log(element.validarID())
//   console.log(element.validarTitulo())
//   console.log(element.validarDirector())
//   console.log(element.validarAño())
//   console.log(element.validarPaises())
//   console.log(element.validarGeneros())
//   console.log(element.validarCalificacion())
// })