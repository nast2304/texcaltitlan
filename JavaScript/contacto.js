document.getElementById("formContacto").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const resultado = document.getElementById("resultado");

    if (nombre === "" || correo === "" || mensaje === "") {
        resultado.textContent = "Por favor completa todos los campos.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = "¡Mensaje enviado correctamente!";
    resultado.style.color = "green";

    document.getElementById("formContacto").reset();
});
