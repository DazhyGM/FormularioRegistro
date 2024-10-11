function verificarTipoDocumento() {
    var tipoDocumento = document.getElementById("tipoDocumento");
    var formulario = document.getElementById("miFormulario").elements;

    // Reseteamos los colores de fondo antes de aplicar los nuevos
    tipoDocumento.style.backgroundColor = "";  // Resetear el fondo del select
    for (var i = 0; i < tipoDocumento.options.length; i++) {
        tipoDocumento.options[i].style.backgroundColor = "";  // Resetear fondo de todas las opciones
    }

    if (tipoDocumento.value === "ti") {
        // Cambiar el fondo de "Tarjeta de identidad" a rojo
        tipoDocumento.style.backgroundColor = "#f8d7da";

        // Mostrar la alerta con SweetAlert2 y botón personalizado
        Swal.fire({
            icon: 'warning',
            title: 'Tipo de Documento Inválido',
            text: 'No se permiten menores de edad. Por favor, elija un tipo de documento válido.',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'custom-swal-confirm-button' // Clase personalizada para el botón
            }
        });

        // Bloquear todos los campos excepto "tipoDocumento"
        for (var i = 0; i < formulario.length; i++) {
            if (formulario[i].id !== "tipoDocumento") {
                formulario[i].disabled = true;
            }
        }
    } else if (tipoDocumento.value !== "") {
        // Cambiar el fondo de la opción seleccionada a verde
        tipoDocumento.style.backgroundColor = "#d4edda";

        // Desbloquear todos los campos
        for (var i = 0; i < formulario.length; i++) {
            formulario[i].disabled = false;
        }
    }
}
