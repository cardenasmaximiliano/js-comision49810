//storage => hace referencia a los mecanismos de almacenamiento que nos proporcionan los navegadores web.
// Ejemplos clasicos de storage => un logueo en gmail, outlook. Cerras la ventana del navegador, y se mantiene la sesion abierta.
//e-commerce donde elegimos productos y cerramos la ventana y siguen selecionados. 


//localStorage => almacenamiento de datos de forma indefinida. Va a permanecer la info aunque nosotros cerremos el navegador.
// se van a mantener los datos hasta que el usuario elimine de forma manual.

//sessionStorage => almacenamiento de datos de forma temporal. Los datos estaran disponibles mientras la session del navegador este activa.


//localStorage => setItem
//nos va a proporcionar es el almacenamiento de datos de manera local en el navegador.
// esta compuesto por clave y argumento. 

// localStorage.setItem("saludo","hola chicos");
// localStorage.setItem("numero",1234);
// localStorage.setItem("booleano", true);

// //metodo getItem => podemos obtener el valor asociado a una clave especifica. 

// let saludo = localStorage.getItem ("saludo");

// console.log(saludo);


// let numero = localStorage.getItem("numero");
// console.log(numero);

// localStorage.removeItem("booleano");

// localStorage.clear();


///lista de tareas

//function para cargar tareas

// function cargarTareas(){
//     let tareas = localStorage.getItem("tareas");

//     if(tareas){
//         let listaTareas = document.getElementById("listaTareas");
//         listaTareas.innerHTML = tareas;
//     }
// }

// //funcion para agregar una nueva tarea

// function agregarTarea(){
//     let tareaInput = document.getElementById("tareasInput");

//     //trim => es una funcion que nos sirve a nosotros para eliminar los espacios en blanco, al principio y al final de una string.
//     let nuevaTarea = tareaInput.value.trim()

//     if(nuevaTarea !== ""){
//         let tareas = localStorage.getItem("tareas") || "";


//         //concatenar la nuevas tareas
//         tareas += "<li>" + nuevaTarea + "</li>";

//         //guardar el contenido
//         localStorage.setItem("tareas",tareas);

//         //limpiar el input y volver a cargar tareas
//         tareaInput.value = "";
//         cargarTareas();
//     }
// }

// //cargar las tareas al cargar la pagina

// cargarTareas();


//json =Z javascript object notation => formato de intercambio de datos. 
//ligero y facil de leer, si bien dice javascript es un formato independependiente. 



//json stringify 

//es una funcion en js que convierete objetos javaScript en cadenas Json. 

// let personas = {
//     "nombre":"juan",
//     "edad":25,
//     "ciudad": "mar del plata"
// }

// let jsonPersonas = JSON.stringify(personas);
// console.log( typeof jsonPersonas);

// console.log( typeof personas);



// //parse => convierete una cadena Json en un objeto Js. 

// let jsonString = '{"nombre":"ignacio", "edad":25, "ciudad":true}';

// let string = JSON.parse(jsonString);
// console.log (string.nombre);

// console.log( string.edad);

// console.log( typeof string.ciudad);

//modo oscuro y modo claro

// const BOTON_MODO = document.getElementById("botonModo");

// BOTON_MODO.addEventListener("click", ()=>{
//     document.body.classList.toggle("dark");

//     //declarar que el cambio permanezca constante
//     if(document.body.classList.contains("dark")){
//         localStorage.setItem("modo","dark");
//     }else{
//         localStorage.setItem("modo","claro")
//     }
// })

// //recuperar modo

// const modo = localStorage.getItem("modo");

// if(modo === "dark"){
//     document.body.classList.add("dark");
// }else{
//     document.body.classList.remove("dark")
// }


class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;

    }
}

const Producto1 = new Producto ("camisa",1000);
const Producto2 = new Producto ("pantalon",2000);

const carrito = [];

carrito.push(Producto1);
carrito.push(Producto2);

console.log ( carrito);

const carritoJSON = JSON.stringify (carrito);

//almacenar el carrito en el localStorage

localStorage.setItem("carrito", carritoJSON);

const carritoRecuperado = localStorage.getItem("carrito");

//pasar a objeto el Json

const carritoObjeto = JSON.parse (carritoRecuperado);

//IMPRIMIR EN DOM

const contenedorCarrito = document.getElementById("contenedorCarrito");

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `<p> ${producto.nombre} - ${producto.precio}</p>`
});