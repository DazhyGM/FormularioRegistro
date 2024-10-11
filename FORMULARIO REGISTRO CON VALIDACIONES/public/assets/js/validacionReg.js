function validarSecuencial() {
    var documento = document.getElementById("documento").value;
    var nombre = document.getElementById("nombre").value;
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var hobbies = document.getElementsByName("hobbies");
    var habilidades = document.getElementsByName("habilidades[]");
    var colorFav = document.getElementById("colorFav").value;
  
    // Expresiones regulares para las validaciones
    var regexDocumento = /^\d+$/; // Solo números
    var regexNombre = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    var regexTelefono = /^\d{10}$/; // Número de teléfono de 10 dígitos
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Correo electrónico
  
    // Validación de documento
    if (!regexDocumento.test(documento)) {
      mostrarAlertaCampo("documento", "Documento inválido. Debe contener solo números.");
      return false;
    }
  
    // Validación de nombre
    if (!regexNombre.test(nombre)) {
      mostrarAlertaCampo("nombre", "Nombre inválido. Debe contener solo letras.");
      return false;
    }
  
    // Validación del tipo de documento
    if (!tipoDocumento || tipoDocumento === "") {
      mostrarAlertaCampo("tipoDocumento", "Por favor selecciona un tipo de documento.");
      return false;
    }
  
    // Verificar si es Tarjeta de Identidad
    if (tipoDocumento === "ti") {
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
  
    // Validación de fecha de nacimiento (puedes usar una validación adicional si es necesario)
    if (!fechaNacimiento) {
      mostrarAlertaCampo("fechaNacimiento", "Por favor selecciona una fecha de nacimiento.");
      return false;
    }
  
    // Validación del teléfono
    if (!regexTelefono.test(telefono)) {
      mostrarAlertaCampo("telefono", "Teléfono inválido. Debe contener 10 dígitos.");
      return false;
    }
  
    // Validación del correo electrónico
    if (!regexEmail.test(email)) {
      mostrarAlertaCampo("email", "Correo electrónico inválido.");
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
  
    // Validación de selección de color
    if (!validarColor(colorFav)) {
      mostrarAlertaColor();
      return false;
    }
  
    return true;
  }
  
  function mostrarAlertaCampo(campo, mensaje) {
    Swal.fire({
      icon: "error",
      title: "Acción inválida",
      text: mensaje,
      customClass: {
        confirmButton: "custom-button",
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
      },
    });
    document.getElementById(campo).focus();
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
    return colorFav !== "#000000" && colorFav !== "";
  }
  