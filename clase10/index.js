//eventos => acciones o situaciones que pueden llegar a ocurrir en un sitio web.
//estas son detectadas por el codigo. AL interactuar con un mouse o teclado entre otros. 


//eventos para que me sirven => animaciones, juegos, interacciones con los sitios.
//los eventos interactuan constantemente con el DOM.

//existen 3 maneras de generar eventos 

//addEvenListener => que se utiliza para registrar control de un evento en un objeto especifico. 

// const btn = document.getElementById("btn"); //document. es un objeto y getElementById es un metodo. Y un nodo?  => etiqueta. 


// // sintaxis basica
// /*
//     elemento.addEventListener(evento, funcion);

// */

// btn.addEventListener("click", function() {
//     alert("esto funciona re piola")

// });

// //segundo metodo 

// //evento a traves de onClick

// const btnDos = document.getElementById("btnDos");

// btnDos.onclick = ()=>{
//     alert("segundaForma");
// }

// //tercerMetodo

// function jsEnHTML(){
//     alert("estoy trabajando con evento desde html")
// }

// //eventos de mouse => se producen cuando el usuario interactua con el mouse.

// //ejemplos con mouse

// const caja = document.getElementById("caja");

// //mouseover / mouseout => si el puntero del mouse se mueve sobre el elemento o sale del mismo. 

// //mouseout => se va del elemento. 

// caja.onmouseout = ()=>{
//     console.log("salio de la caja")
// }

// //mouseover => ingresa al a caja
// caja.onmouseover = () => {
//     console.log("ingreso a la caja")
// }

// //mousemove => el movimiento dentro del elemento.

// caja.onmousemove = () =>{
//     console.log("pasaste el mouse por la caja")
// }

// //mousedown / mouseUp => detecta cuando se suelta o se mantiene un elemento clickeado

// caja.addEventListener("mousedown", function(){
//     console.log("esta clickeando")
// })

// caja.addEventListener("mouseup", function(){
//     console.log("no lo esta clickeando")
// })


// ///eventos de tecladoo

// const campoTexto = document.getElementById("campoTexto");


// //keydown => cuando el usuario presiona una tecla
// //keyup => nos dice cuando la suelta

// campoTexto.onkeydown = () =>{
//     console.log("presiono una tecla")
// }

// campoTexto.onkeyup = () =>{
//     console.log("soltar tecla")
// }

// //change => se activa cuando el valor de un elemento formulario cambia.

// const change = document.getElementById("change");

// change.addEventListener("change", function(){
//     console.log("valor cambiado " + change.value);
// })

// //input => permite ejecutar una funcion cada vez que usuario ingresa texto en el campo

// const texto = document.getElementById("texto");

// texto.addEventListener("input", ()=>{
//     console.log(texto.value);
// })


// //evento submit 

 class Cliente{
     constructor(nombre,apellido,nickname,password){
         this.nombre = nombre;
         this.apellido = apellido;
         this.nickname = nickname;
         this.password = password;
     }
 }

const arrayClientes = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (pepito)=>{
    pepito.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const nick = document.getElementById("nick");
    const password = document.getElementById("password");

    //verificamos por consola que todo este bien
    console.log("El nombre ingresado es: " + nombre.value);
    console.log("el apellido es: " + apellido.value);
    
    const cliente = new Cliente(nombre.value, apellido.value,nick.value, password.value);
    arrayClientes.push(cliente);
    
    //verificamos el array
    
    console.log(arrayClientes);

    formulario.reset();
} )

//crear los objetos de clientes:


//reseteo de formulario

