const boton = document.getElementById("boton");

boton.addEventListener("click", ()=>{

    Swal.fire({
        title:"comision 49810",
        text:"la mejor comision de la mañana",
        icon: "warning",
        imageUrl: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        confirmButtonText: "aceptar",
        background:"bisque",
        backdrop: "black"
    })


})


const botonAnimacion = document.getElementById("boton-animacion");

botonAnimacion.addEventListener("click",()=>{
    Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__rubberBand
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
})

//

const complejo = document.getElementById("complejo");
complejo.addEventListener("click", ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "desea ingresar",
        cancelButtonText: "cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "compra exitosa",
            text: "todos sus articulos se han comprado con exito",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
})
////////




const btnSession = document.getElementById("btnSession");

const usuarioAutorizado ="coder2023";
const passwordAutorizado = "milidev2023"

btnSession.addEventListener("click",()=>{
    Swal.fire({
        title:"inicio de sesion",
        html:`
        <input type="text" id="usuario" class="swal2-input" placeholder="usuario">
        <input type="text" id="password" class="swal2-input" placeholder="password">    
        `,
        confirmButtonText: "ingresar",
        showCancelButton:true,
        cancelButtonText:"cancelar"
    }).then((result)=>{
        if(result.isConfirmed){
            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;
            // exitoso
            if(usuario === usuarioAutorizado && password === passwordAutorizado){

                //widow.location nos sirve para redireccionarnos a otro html

                window.location.href = "exito.html";
        }   
    }
    })
})

// TOSTIFY

const tostify = document.getElementById("tostify");
tostify.addEventListener("click", ()=>{
    Toastify({
        text:"producto agregado a carrito",
        duration:2000,
        position:"right",
        gravity:"top",
        style:{
            background:"lightcoral",
        }

    }).showToast();
});

    const DateTime = luxon.DateTime;
// const DateTime = luxon.DateTime;
 DateTime.now();