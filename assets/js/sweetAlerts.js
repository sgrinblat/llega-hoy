const botonFormulario = document.querySelector("#enviarFormulario");

const faltanCargarDatos = () => {
    return (formularioNombre.value.trim == " " || formularioApellido.value.trim == " " || isNaN(parseInt(formularioNumero.value)));
}

botonFormulario.addEventListener("click", (event) => {
    
    faltanCargarDatos() ? mostrarError() : mostrarConfirmacion();
    event.preventDefault()
})

const mostrarError  = () => {
    Swal.fire({
        title: "Tienes que completar todos los campos para enviar el formulario 🚨",
        position: "top-end",
        showConfirmButton: false,
        toast: true,
        timer: 3000,
        timerProgress: true,
        background: "#f8c538",
        color: "#000"
    })
}

const mostrarConfirmacion = () => {
    
    Swal.fire({
        title: 'Estás por enviar el formulario',
        text: "¿Has rellenado correctamente todos los campos?",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonAriaLabel: "Cancelar",
        confirmButtonColor: '#d707cc',
        cancelButtonColor: '#f8c538',
        confirmButtonText: 'Si, envía mi formulario'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Enviado!',
                'Tu formulario ha sido enviado correctamente.',
                'success'
            )
        }
    })
}
