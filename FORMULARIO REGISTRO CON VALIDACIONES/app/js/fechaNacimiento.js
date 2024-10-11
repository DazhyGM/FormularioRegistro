function calcularEdad() {
    const fechaNacimiento = document.getElementById("fechaNacimiento");
    const edadRange = document.getElementById("edad");
    const edadOutput = document.getElementById("edad-output");
    const formulario = document.getElementById("miFormulario").elements; // Capturar el formulario para deshabilitar

    if (fechaNacimiento.value) {
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento.value);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();

        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        edad = Math.max(1, Math.min(edad, 100)); // Asegura que la edad esté entre 1 y 100

        // Actualizar barra de rango y valor de edad
        edadRange.disabled = false;
        edadRange.value = edad;
        edadOutput.textContent = ` (${edad} años)`;

        // Cambiar color de fondo basado en la edad
        if (edad < 18) {
            fechaNacimiento.style.backgroundColor = "#f8d7da"; 
            Swal.fire({
                icon: 'warning',
                title: 'Edad insuficiente',
                text: 'Debe ser mayor de edad para continuar. Por favor elija una fecha válida.',
                confirmButtonText: 'Aceptar',
                customClass: {
                    confirmButton: 'custom-swal-confirm-button'
                }
            });

            // Bloquear todos los campos excepto "fechaNacimiento"
            for (var i = 0; i < formulario.length; i++) {
                if (formulario[i].id !== "fechaNacimiento") {
                    formulario[i].disabled = true;
                }
            }
        } else {
            fechaNacimiento.style.backgroundColor = "#d4edda";

            // Desbloquear todos los campos
            for (var i = 0; i < formulario.length; i++) {
                formulario[i].disabled = false;
            }
        }
    }
}

function deshabilitarFormularioMenor(deshabilitar) {
    const inputs = document.querySelectorAll('#formulario input, #formulario select, #formulario button');
    inputs.forEach(input => {
        if (input.id !== 'fechaNacimiento') { // Mantener habilitado el campo de fecha de nacimiento
            input.disabled = deshabilitar;
        }
    });
}

// Combinar calcularEdad y validarCampo en un solo evento
function manejarCambioFecha() {
    validarCampo('fechaNacimiento'); // Llamar a la validación existente
    calcularEdad(); // Llamar al cálculo de edad
}

// Escuchar el evento cuando la página cargue
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("fechaNacimiento").addEventListener("change", manejarCambioFecha);
});
