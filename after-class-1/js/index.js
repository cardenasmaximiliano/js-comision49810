//Escribe un programa que determine si un usuario puede acceder
//  a una página web basándose en dos condiciones: 
//  el usuario debe estar registrado y debe ser mayor de edad. 
//  Si ambas condiciones son verdaderas, muestra un mensaje de bienvenida. 
//  De lo contrario, muestra un mensaje de acceso denegado.

// let estaRegistrado = prompt("¿Esta registrado? contestar con si o no");
// let esMayorEdad = prompt("¿Es mayor de Edad? contestar con si o no");

// if(estaRegistrado === "si" && esMayorEdad === "si"){
//     console.log("bienvenido al sitio")

// }
// else{
//     console.log("no puedo ingresar");
// }

/** 
 * Crea un programa que determine si un producto está en stock en una tienda en línea.
 *  Para que un producto esté disponible, debe estar marcado como "en stock" o tener
 *  un precio con descuento. Si alguna de estas condiciones se cumple, muestra un mensaje
 *  de "Producto disponible"; de lo contrario, muestra un mensaje de "Producto agotado".
*/

// let enStock = prompt("¿El producto esta en stock? conteste si o no");
// let precioConDescuento = prompt("¿el producto tiene descuento? contesta si o no");

// if(enStock ==="si" || precioConDescuento ==="si"){
//     console.log("producto disponible")

// }
// else{
//     console.log("producto agotado")
// }

/*
    Desarrolla un programa que verifique si un usuario ha iniciado sesión.
     Si el usuario no ha iniciado sesión, muestra un mensaje que le recuerde 
     iniciar sesión; si ha iniciado sesión, muestra un mensaje de bienvenida.
*/

// let haIniciadoSesion = true;

// if(!haIniciadoSesion){
//     console.log("por favor, inicia sesion.")
// }
// else{
//     console.log("bienvenido de nuevo");
// }

// let sesion = prompt('iniciaste sesión? si no');
// if(sesion === 'si'){
//     console.log('Bienvenido a bordo')
// }else{
//     console.log('Debes iniciar sesión')
// }

/**
 * Diseña un programa en JavaScript que simule un sistema de autenticación 
 * de usuario para un sitio web. El programa debe solicitar al usuario que 
 * ingrese un nombre de usuario y una contraseña. Debe verificar las siguientes 
 * condiciones para permitir el acceso:

El nombre de usuario debe ser "admin".
La contraseña debe ser "secreta" o "123456".

El programa debe utilizar los operadores lógicos "y" (&&) y "o" (||) 
para evaluar estas condiciones y permitir el acceso si el nombre de usuario 
y la contraseña son correctos.
 */

let nombreusuario = prompt("ingrese su nombre de usuario");
let contrasenia = prompt("ingrese su contraseña");

if(nombreusuario === "admin" && (contrasenia ==="secreta" || contrasenia ==="123456")){
    console.log("acceso permitido")
}
else{
    console.log("anda pa ya no podes ingresar")
}

//precedencia de operadores

//1 se resuelven corchetes / parentesis
// operadores unitario ++ --
//aritmeticos * /
//aritmeticos + - 
