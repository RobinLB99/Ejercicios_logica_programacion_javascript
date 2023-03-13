/**Piedra, papel o tigeras */

const aleatorio = (min, maxi) => {
    let resultado = Math.floor(Math.random()*(maxi - min + 1)) + min;
    return resultado;
}

let repetir = false

do {
    let yo = parseInt(prompt("Escoje: 1. Piedra, 2. Papel, 3. Tigera"))
    let computador = aleatorio(1,3)

    switch (yo) {
        case 1:
            repetir = false
            if (computador === 1)
                alert("Empate. Ambos sacaron piedra");

            if (computador === 2)
                alert("Usted pierde!. Piedra pierde contra Papel");

            if (computador === 3)
                alert("Usted gana! Piedra le gana a tijeras");

            break;

        case 2:
            repetir = false
            if (computador === 1)
                alert("Usted gana! Papel le gana a Piedra");

            if (computador === 2)
                alert("Empate! Ambos sacaron Papel");

            if (computador === 3)
                alert("Usted pierde! Papel pierde contra Tigeras");

            break;

        case 3:
            repetir = false
            if (computador === 1)
                alert("Usted pierde!. Tijeras pierde contra Piedra");

            if (computador === 2)
                alert("Usted gana! Tijeras vence a Papel");

            if (computador === 3)
                alert("Empate! Ambos sacaron Tijeras");

            break;

        default:
            repetir = true;
            alert("No escogio una opcion valida");
            break;
    }
}while (repetir);