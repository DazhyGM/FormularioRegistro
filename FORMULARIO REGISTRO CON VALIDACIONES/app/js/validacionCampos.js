function validarCampo(campoId) {
    var campo = document.getElementById(campoId);
    if (!campo.checkValidity()) {
        campo.focus();
        campo.style.backgroundColor = "#f8d7da";
        Swal.fire({
            icon: 'error',
            title: 'Acción inválida',
            text: 'Por favor completa el campo seleccionado.',
            customClass: {
                confirmButton: 'custom-button',
                popup: 'custom-popup',
                title: 'custom-title',
                content: 'custom-content'
            }
        });
        return false;
    }
    
    else {
        campo.style.backgroundColor ="#d4edda";
        return true;
    }
    }

