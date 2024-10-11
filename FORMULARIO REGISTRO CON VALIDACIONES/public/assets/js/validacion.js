function validarSecuencial() {
  var documento = document.getElementById("documento");
  var nombre = document.getElementById("nombre");
  var tipoDocumento = document.getElementById("tipoDocumento");
  var fechaNacimiento = document.getElementById("fechaNacimiento");
  var telefono = document.getElementById("telefono");
  var email = document.getElementById("email");
  var hobbies = document.getElementsByName("hobbies");
  var habilidades = document.getElementsByName("habilidades[]");
  var colorFav = document.getElementById("colorFav");

  // Validación de documento
  if (!documento.checkValidity()) {
    mostrarAlertaCampo(documento);
    return false;
  }

  // Validación de nombre y apellido
  if (!nombre.checkValidity()) {
    mostrarAlertaCampo(nombre);
    return false;
  }

  // Validación del tipo de documento
  if (!tipoDocumento.checkValidity() || tipoDocumento.value === "") {
    mostrarAlertaCampo(tipoDocumento);
    return false;
  }

  // Verificar si es Tarjeta de identidad
  if (tipoDocumento.value === "ti") {
    Swal.fire({
      icon: "warning",
      title: "Tipo de Documento Inválido",
      text: "No se permiten menores de edad. Por favor, elija un tipo de documento válido.",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton: "custom-swal-confirm-button",
      },
    });
    bloquearCampos();
    return false;
  }

  // Validación de fecha de nacimiento
  if (!fechaNacimiento.checkValidity()) {
    mostrarAlertaCampo(fechaNacimiento);
    return false;
  }

  // Validación del teléfono
  if (!telefono.checkValidity()) {
    mostrarAlertaCampo(telefono);
    return false;
  }

  // Validación del correo electrónico
  if (!email.checkValidity()) {
    mostrarAlertaCampo(email);
    return false;
  }

  // Validación de hobbies (asegúrate de que al menos uno esté seleccionado)
  if (!validarHobbies(hobbies)) {
    mostrarAlertaHobbies();
    return false;
  }

  // Validación de habilidades (asegúrate de que al menos una esté seleccionada)
  if (!validarHabilidades(habilidades)) {
    mostrarAlertaHabilidades();
    return false;
  }

  // Validación de selección de color (asegúrate de que el color no sea el valor predeterminado)
  if (!validarColor(colorFav)) {
    mostrarAlertaColor();
    return false;
  }

  // Si todo está correcto
  return true;
}

function validarHobbies(hobbies) {
  for (var i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      return true;
    }
  }
  return false;
}

function validarHabilidades(habilidades) {
  for (var i = 0; i < habilidades.length; i++) {
    if (habilidades[i].checked) {
      return true;
    }
  }
  return false;
}

function validarColor(colorFav) {
  // Si no se selecciona ningún color, el valor predeterminado es "#000000" (negro)
  return colorFav.value !== "#000000" && colorFav.value !== ""; // Si es el color predeterminado (negro), consideramos que no ha sido seleccionado
}

function mostrarAlertaCampo(campo) {
  Swal.fire({
    icon: "error",
    title: "Acción inválida",
    text: "Por favor completa el campo seleccionado.",
    customClass: {
      confirmButton: "custom-button",
      popup: "custom-popup",
      title: "custom-title",
      content: "custom-content",
    },
  });
  campo.focus();
}

function mostrarAlertaHobbies() {
  Swal.fire({
    icon: "error",
    title: "Acción inválida",
    text: "Por favor selecciona al menos un hobby.",
    customClass: {
      confirmButton: "custom-button",
      popup: "custom-popup",
      title: "custom-title",
      content: "custom-content",
    },
  });
}

function mostrarAlertaHabilidades() {
  Swal.fire({
    icon: "error",
    title: "Acción inválida",
    text: "Por favor selecciona al menos una habilidad.",
    customClass: {
      confirmButton: "custom-button",
      popup: "custom-popup",
      title: "custom-title",
      content: "custom-content",
    },
  });
}

function mostrarAlertaColor() {
  Swal.fire({
    icon: "error",
    title: "Acción inválida",
    text: "Por favor selecciona tu color favorito.",
    customClass: {
      confirmButton: "custom-button",
      popup: "custom-popup",
      title: "custom-title",
      content: "custom-content",
    },
  });
}

function bloquearCampos() {
  var formulario = document.getElementById("miFormulario").elements;
  for (var i = 0; i < formulario.length; i++) {
    if (formulario[i].id !== "tipoDocumento") {
      formulario[i].disabled = true;
    }
  }
}

function desbloquearCampos() {
  var formulario = document.getElementById("miFormulario").elements;
  for (var i = 0; i < formulario.length; i++) {
    formulario[i].disabled = false;
  }
}

document.getElementById("miFormulario").onsubmit = function (e) {
  if (!validarSecuencial()) {
    e.preventDefault(); // Evitar que el formulario se envíe si hay algún campo inválido
  }
};
// Variable para el campo de color
var colorFav = document.getElementById("colorFav");

// Referencia a los botones
var confirmarColorBtn = document.getElementById("confirmarColorBtn");
var enviarBtn = document.getElementById("enviarBtn");

// Función para manejar la selección de color
colorFav.addEventListener("input", function () {
  // Habilitamos el botón de confirmar cuando el usuario elige un color
  confirmarColorBtn.disabled = false;
});

// Función para confirmar el color
confirmarColorBtn.addEventListener("click", function () {
  if (validarColor(colorFav)) {
    Swal.fire({
      icon: "success",
      title: "Color confirmado",
      text: "Has seleccionado tu color favorito correctamente.",
      customClass: {
        confirmButton: "custom-button",
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
      },
    });

    // Habilitamos el botón de enviar el formulario
    enviarBtn.disabled = false;
  } else {
    Swal.fire({
      icon: "error",
      title: "Color no válido",
      text: "Por favor selecciona un color válido.",
      customClass: {
        confirmButton: "custom-button",
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
      },
    });
  }
});

// Validación del color
function validarColor(colorFav) {
  // Si el color es negro o vacío, no es válido
  return colorFav.value !== "#000001" && colorFav.value !== "";
}

// Validación del formulario cuando se hace submit
document.getElementById("miFormulario").onsubmit = function (e) {
  if (!validarSecuencial()) {
    e.preventDefault(); // Evitar que el formulario se envíe si hay algún campo inválido
  }
};
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

    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
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
        icon: "warning",
        title: "Edad insuficiente",
        text: "Debe ser mayor de edad para continuar. Por favor elija una fecha válida.",
        confirmButtonText: "Aceptar",
        customClass: {
          confirmButton: "custom-swal-confirm-button",
        },
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
  const inputs = document.querySelectorAll(
    "#formulario input, #formulario select, #formulario button"
  );
  inputs.forEach((input) => {
    if (input.id !== "fechaNacimiento") {
      // Mantener habilitado el campo de fecha de nacimiento
      input.disabled = deshabilitar;
    }
  });
}

// Combinar calcularEdad y validarCampo en un solo evento
function manejarCambioFecha() {
  validarCampo("fechaNacimiento"); // Llamar a la validación existente
  calcularEdad(); // Llamar al cálculo de edad
}

// Escuchar el evento cuando la página cargue
window.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("fechaNacimiento")
    .addEventListener("change", manejarCambioFecha);
});
function verificarTipoDocumento() {
  var tipoDocumento = document.getElementById("tipoDocumento");
  var formulario = document.getElementById("miFormulario").elements;

  // Reseteamos los colores de fondo antes de aplicar los nuevos
  tipoDocumento.style.backgroundColor = ""; // Resetear el fondo del select
  for (var i = 0; i < tipoDocumento.options.length; i++) {
    tipoDocumento.options[i].style.backgroundColor = ""; // Resetear fondo de todas las opciones
  }

  if (tipoDocumento.value === "ti") {
    // Cambiar el fondo de "Tarjeta de identidad" a rojo
    tipoDocumento.style.backgroundColor = "#f8d7da";

    // Mostrar la alerta con SweetAlert2 y botón personalizado
    Swal.fire({
      icon: "warning",
      title: "Tipo de Documento Inválido",
      text: "No se permiten menores de edad. Por favor, elija un tipo de documento válido.",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton: "custom-swal-confirm-button", // Clase personalizada para el botón
      },
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
function validarCampo(campoId) {
  var campo = document.getElementById(campoId);
  if (!campo.checkValidity()) {
    campo.focus();
    campo.style.backgroundColor = "#f8d7da";
    Swal.fire({
      icon: "error",
      title: "Acción inválida",
      text: "Por favor completa el campo seleccionado.",
      customClass: {
        confirmButton: "custom-button",
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
      },
    });
    return false;
  } else {
    campo.style.backgroundColor = "#d4edda";
    return true;
  }
}
