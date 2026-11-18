function convertir() {

    let temperatura = document.getElementById("temperatura").value;

    if (temperatura === "") {
        alert("Por favor, ingresa una temperatura.");
        return;
    }

    temperatura = parseFloat(temperatura);

    let conversion = document.getElementById("conversion").value;

    let resultado;

    if (conversion === "celsius") {

        resultado = (temperatura * 9 / 5) + 32;

        document.getElementById("resultado").innerHTML =
            temperatura + " °C equivalen a " +
            resultado.toFixed(2) + " °F";

    } else {

        resultado = (temperatura - 32) * 5 / 9;

        document.getElementById("resultado").innerHTML =
            temperatura + " °F equivalen a " +
            resultado.toFixed(2) + " °C";
    }
}