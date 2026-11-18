function calcularPromedio() {

    // Obtener los datos del estudiante
    let nombre = document.getElementById("nombre").value;

    let calificacion1 = document.getElementById("calificacion1").value;
    let calificacion2 = document.getElementById("calificacion2").value;
    let calificacion3 = document.getElementById("calificacion3").value;

    // Validar que el nombre no esté vacío
    if (nombre.trim() === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    // Validar que las calificaciones tengan un valor
    if (calificacion1 === "" || calificacion2 === "" || calificacion3 === "") {
        alert("Por favor, ingresa las tres calificaciones.");
        return;
    }

    // Convertir las calificaciones a números
    calificacion1 = Number(calificacion1);
    calificacion2 = Number(calificacion2);
    calificacion3 = Number(calificacion3);

    // Validar que sean números válidos y estén entre 0 y 10
    if (
        !Number.isFinite(calificacion1) ||
        !Number.isFinite(calificacion2) ||
        !Number.isFinite(calificacion3) ||
        calificacion1 < 0 || calificacion1 > 10 ||
        calificacion2 < 0 || calificacion2 > 10 ||
        calificacion3 < 0 || calificacion3 > 10
    ) {
        alert("Las calificaciones deben ser números entre 0 y 10.");
        return;
    }

    // Calcular el promedio
    let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    let estado;
    let observacion;

    // Determinar si el estudiante aprobó o reprobó
    if (promedio >= 6) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }

    // Determinar la observación
    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // Mostrar los resultados en la página
    document.getElementById("resultado").innerHTML =

        "<h3>Resultados del estudiante</h3>" +
        "<p><b>Nombre:</b> " + nombre + "</p>" +
        "<p><b>Primera calificación:</b> " + calificacion1 + "</p>" +
        "<p><b>Segunda calificación:</b> " + calificacion2 + "</p>" +
        "<p><b>Tercera calificación:</b> " + calificacion3 + "</p>" +
        "<p><b>Promedio:</b> " + promedio.toFixed(2) + "</p>" +
        "<p><b>Estado:</b> " + estado + "</p>" +
        "<p><b>Observación:</b> " + observacion + "</p>";

}