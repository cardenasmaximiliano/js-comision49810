//funciones

//bloque codigo, que realiza tareaas especificas.
// qe nos sirven para encapsular bloques de codigos.
//reutilizable


//declaracion una funcion


//como nombramos la funcion,recuerden que tiene que ser un verbo
//o una accion - tiene que estar escrito en camelcase
//camelCase = joroba de camello 

// function saludar(){
//     //instrucciones o bloques de codigo de la funcion
//     console.log("buenos dias Perritos malvados");
  
// }
// //¿como se llama?

// saludar();




// function suma() {
//     let num1 = parseInt(prompt("ingresa un numero"));
//     let num2 = parseInt(prompt("ingresa un numero"));
//     let suma= num1 + num2;
//     console.log("la suma es: " + suma);
    
// }

// suma();
// suma();


/******************** scoupe ************************** */
//scoupe => significa ambit, habla sobre la visibilidad 
//y accesibilidad de una variable dentro de un programa.

// 2 tipos de scoupe, local y otro global. 

//variables globales 
// let num1 = parseInt(prompt("ingresa un numero"));
// let num2 = parseInt(prompt("ingresa un numero"));

// function suma() {
//     //variable local, nace y muere dentro de la funcion. 
//     let num1 = parseInt(prompt("ingresa un numero"));
//     let num2 = parseInt(prompt("ingresa un numero"));
//     let suma= num1 + num2;
//     console.log("la suma es: " + suma);
    
// }

// suma();
// suma();

// let variableGlobal = "soy global";

// function ejemploScoupe(){
//     let variableLocal = "soy local";
//     console.log(variableGlobal);
//     console.log(variableLocal);

// }
// ejemploScoupe()

// console.log(variableGlobal);
//     console.log(variableLocal);

//ejemplo de funcion

// function ingresaNombre(){
//     let nombreIngresado = prompt ("ingresa nombre");
//     console.log("el nombre ingresado es " + nombreIngresado);

// }

// ingresaNombre();
// ingresaNombre();

// let nombreIngresado2 = prompt ("ingresa nombre");
// console.log("el nombre ingresado es " + nombreIngresado2);

// funcion de ejemplo con while

// function ingresaNombre(){
//         let nombreIngresado = prompt ("ingresa nombre");
//          console.log("el nombre ingresado es " + nombreIngresado);
    
//     }

// let numero = 0;

// while(numero < 5){
//     ingresaNombre()
//     numero++
// }

//FUNCIONES CON PARAMETROS

//un parametro es un valor que se pasa a una funcion cuando se llama
//las funciones pueden aceptar 0 parametros o los que necesiten.

//los parametros son variables locales dentro de la funcion.


// function sumar(a,b){
//     return a + b; 
// }

// let resultado = sumar (5,5);

// console.log (resultado)

//ejemplo parametros


// let nombreIngresado = prompt("ingresa tu nombre:");
// let nombreSegundoIngresado = prompt("ingresa tu segundo nombre:");
// let apellidoIngresado = prompt("ingresa tu apellido:");


// //cuando se declara es parametro
// function saludar(nombre,segundo, apellido){
//     console.log("bienvenido alumno: " + nombre+ " "+segundo + " "+apellido);
// }


// //cuando se llama a la funcion es argunmento
// saludar(nombreIngresado,nombreSegundoIngresado,apellidoIngresado);


//funcion anonima

//una funcion anonima, es una funcion que no tiene un nombre asociado. 

//estas funciones pueden asignarse a variables o pasarse a argumentos.

// let suma = function(a,b){
//     return a + b; 
// }

// //llamada a la funcion

// let resultado = suma(3,5);

// console.log(resultado);

// funcion flecha o arrow functions

//una funcion que nace en ECMA6 => 

function sumar(a,b){
    return a + b;
}

// variable = ()=> 


let sumar = (a,b) => a + b; 

