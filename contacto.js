const showEncuesta = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias, su encuesta se envio correctamente',
        showConfirmButton: false,
        timer: 1500
      })
}
let butto = document.getElementById('enviarEncuesta');
button.onclick=showEncuesta

const showBorrar = () => {
    Swal.fire({
        title: 'Esta seguro?',
        text: "Si borra los datos no podra revertirlos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar datos!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminados!',
            'Sus datos han sido eliminados.',
            'success'
          )
        }
      })
}
let button = document.getElementById('borrar');
button.onclick=showBorrar

const showFormulario = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
}
let button = document.getElementById('enviarFormulario');
button.onclick=showFormulario
